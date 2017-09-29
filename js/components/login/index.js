
import React, { Component } from 'react';

import { Image, AsyncStorage } from 'react-native';



import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button, Icon, View, Text } from 'native-base';

import { replaceRoute, pushNewRoute } from '../../actions/route';
import { setUser } from '../../actions/user';
import styles from './styles';

import BaseApi from '../../services/BaseApi';
const background = require('../../../images/login_bg.png');



class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
  }


  constructor(props) {
    super(props);
    this.state = {
      username: 'blind',
      password: 'blind',
    };
    AsyncStorage.getItem("@user_token")
    .then((userToken)=> {
      if(userToken) {
        BaseApi.me()
        .then( (res)=> {
          if(res.ok) {
            this.replaceRoute('home');
          }
        })
      }
    })
  }

  changeUsername = (username)=> {
    this.setState({ username: username});
  }
  replaceRoute(route) {
    this.props.replaceRoute(route);
  }
  pushNewRoute(route) {
    this.props.replaceRoute(route);
  }
  loginAct = ()=> {
    const { username, password } = this.state
    this.isAttempting = true
    BaseApi.login(username, password)
    .then((res)=> {
      console.log(res);
      if(res.ok) {
        let token = res.data.token;
        AsyncStorage.setItem('@user_token', token);
      } else {
        throw(res.problem);
      }
    })
    .then((res)=> {
      this.replaceRoute('home');
    })
    .catch((err)=> {
      alert(err);
    })
    this.replaceRoute('home');
    AsyncStorage.setItem('@user_gender', "F");
      // this.replaceRoute('home');
  }
  gotoSignup = ()=> {
    this.pushNewRoute('signup');
  }
  render() {
    return (
        <View style={styles.container}>
          <Image source={background} style={styles.shadow}>

            <View style={styles.bg}>
              <InputGroup style={styles.input}>
                <Icon name="ios-person" style={styles.personIcon}/>
                <Input  value={this.state.username} placeholder="아이디" placeholderTextColor="white" style ={styles.inputStyle} onChangeText={this.changeUsername}  />

              </InputGroup>
              <InputGroup style={styles.input}>
                <Icon name="ios-unlock-outline" style={styles.lockIcon} />
                <Input
                    placeholder="비밀번호"
                    placeholderTextColor="white"
                    style ={styles.inputStyle}
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                />

              </InputGroup>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style ={styles.signUpStyle}  onPress={this.gotoSignup}>회원가입</Text>
                <Text style ={styles.forgotPasswordStyle} >비밀번호 찾기</Text>
              </View>

              <Button style={styles.btn} onPress={ this.loginAct}>
                  <Text style={styles.btnText}>로그인</Text>
              </Button>


            </View>
          </Image>
        </View>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    setUser: name => dispatch(setUser(name)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}

export default connect(null, bindActions)(Login);
