
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, View} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import { setIndex } from '../../actions/list';
import myTheme from '../../themes/base-theme';
import styles from './styles';
import MainCard from '../card/main';
const appLogo = require('../../../images/movely.png');
const toolbarBackground = require('../../../images/toolbar.png');


class Home extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    name: React.PropTypes.string,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushNewRoute(route);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>

        <Header style={{backgroundColor:"#bcbddb", }}>

          <Button transparent onPress={()=>this.props.pushNewRoute('editMedia')}>
            <Icon name="ios-menu" color={'white'} style={{color:'white'}} />
          </Button>

          <Button transparent onPress={() => this.pushNewRoute('blankPage')}>
              <Icon name="ios-chatbubbles" color={'white'} style={{color:'white'}} />
          </Button>
          <Title style={{alignSelf:'center'}}>
            <Image source={appLogo} resizeMode="cover" style={{width:80, height:40}}/></Title>



        </Header>

        <Content>
          {false ?
            <Grid style={styles.mt}>
            {this.props.list.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.pushNewRoute('blankPage', i)}
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            )}
            </Grid>
            :
            <MainCard pushNewRoute={pushNewRoute}/>
          }
          
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Home);
