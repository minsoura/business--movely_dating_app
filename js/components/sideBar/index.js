
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';
import { setIndex } from '../../actions/list';
import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './style';

import {
  StyleSheet,
  AsyncStorage,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';


var {height, width} = Dimensions.get('window');
class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  constructor(props){
    super(props)

    this.state = {
      me : {
        medias: []
      }
    }
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.setIndex(undefined);
    this.props.replaceOrPushRoute(route);
  }
  componentDidMount() {
    AsyncStorage.getItem("@me")
    .then((_me)=>{
      var me = JSON.parse(_me);
      if(me && me.medias) return this.setState({me: me});
    })
  }
  actLogout = ()=> {
    AsyncStorage.removeItem('@user_token')
    .then(()=> {
      AsyncStorage.getItem("@user_token")
      this.navigateTo('login');
    })
  }
  editMediaAct = () => {
    this.navigateTo('editMedia');
  }
  render() {
    var me = this.state.me;
    console.log(me);
    if(me.medias[0]) console.log(me.medias[0].thumbnailUrl);
    return (
      <Content theme={myTheme} style={styles.sidebar} >
        {me.medias[0] ?
          <View style={styles.mainImageBox}>
            <Image source={{uri: me.medias[0].thumbnailUrl}} resizeMode="cover" style ={styles.mainImage}/>
          </View>
          : null

        }
        <List>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>Home</Text>
          </ListItem>
          <ListItem button onPress={this.editMediaAct} >
            <Text>환경설정</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(SideBar);
