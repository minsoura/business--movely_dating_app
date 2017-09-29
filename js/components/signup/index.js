import React, {PropTypes, Component} from 'react'
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  AsyncStorage,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
  BackAndroid,
} from 'react-native'
import { Container,Picker, Header, Title, Content, Text, Button, Icon, InputGroup, Input, Radio,} from 'native-base';
import { connect } from 'react-redux'
import styles from './styles.js'
import testStyleSheet from './signupComponents/customStyle.js'
import BaseApi from '../../services/BaseApi';
import { Platform } from 'react-native';
import { popRoute,replaceOrPushRoute } from '../../actions/route';


var customEmailTemplate= require('./signupComponents/inputTextEmail.js');
var customNickNameTemplate= require('./signupComponents/inputTextNickName.js');
var customPasswordTemplate= require('./signupComponents/inputTextPassword.js');
var customPhoneNumberTemplate= require('./signupComponents/inputTextPhoneNumber.js');
var customGenderTemplate= require('./signupComponents/selectGender.js');
var customLocationTemplate= require('./signupComponents/selectRegion.js');


const background = require('../../../images/login_bg2.png');
import t from 'tcomb-form-native';
//import t from '../../libraries/tcomb-form-native';
var Form = t.form.Form;

var Gender = t.enums({
    M:'Male',
    F:'Female'

})


var Location = t.enums({
    SE: '서울',
    KKI: '경기 - 일산',
    KKU: '경기 - 의정부',
    KKA: '경기 - 안양',
    KKB: '경기 - 분당',
    KKS: '경기 - 수원',
    KKE: '경기 - 기타',
    IC: '인천',
    KW: '강원',
    CB: '충북',
    CN: '충남',
    DJ: '대전',
    KB: '경북',
    DG: '대구',
    KN: '경남',
    BS: '부산',
    US: '울산',
    JB: '전북',
    JN: '전남',
    KJ: '광주',
    JJ: '제주',
})

var Person = t.struct({
    email:t.Str,
    username:t.Str,
    password:t.Str,
    phoneNumber:t.Number,
    gender:Gender,
    region:Location,
    birthday:t.Date,
})

var options ={
    hasError: true,
    fields:{
        email:{
            error: '*필수입력',
            keyboardType: 'email-address',
            autoCorrect: false,
            autoCapitalize: "none",
            placeholderTextColor:'white',
            placeholder:'이메일',
            template:customEmailTemplate,
        },
        username:{
            error: '*필수입력',
            placeholderTextColor:'white',
            placeholder:'닉네임',
            template:customNickNameTemplate,

        },
        password:{
            error: '*필수입력',
            password: true,
            secureTextEntry: true,
            placeholderTextColor:'white',
            placeholder:'패스워드',
            template:customPasswordTemplate,

        },
        phoneNumber:{
            error: '*필수입력',
            keyboardType:'numeric',
            placeholderTextColor:'white',
            placeholder:'전화번호',
            template:customPhoneNumberTemplate,
        },
        gender:{
            error: '*필수입력',
            label:'성별',
            template:Platform.OS === 'ios' ? null : customGenderTemplate,
        },
        region:{
            error: '*필수입력',
            label:'지역',
            template:Platform.OS === 'ios' ? null : customLocationTemplate,
        },

        birthday:{
            error: '*필수입력',
            mode: 'date',
            config: {
                color:'white',
                format: function (date) {
                    return date.toISOString().substring(0, 10);
                },
                parse: function (date) {
                    return date.toISOString().substring(0, 10);
                }
            },
            label: '생년월일',

        }
    }
}
var value = {
    email: '',
    username: "",
    password: '',
    gender: 'M',
    phoneNumber: '',
    region: 'SE',
    birthday: new Date(),
};

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nickname: "",
            password: '',
            gender: '',
            phoneNumber: '',
            region: 'SE',
            date: new Date(),
        };

    }
  static propTypes = {
    popRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  popRoute() {
    console.log("pop routes");
    this.props.popRoute();
  }

  replaceRoute(route) {
    this.props.replaceOrPushRoute(route);
  }
  signupAct = ()=> {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      var valueJson = {

        username: value.username,
        email: value.email,
        gender: value.gender,
        password: value.password,
        phoneNumber: value.phoneNumber,
        birthday: value.birthday.toISOString().substring(0, 10),
        region: value.region,
      };
      // baseApi = new BaseApi();
      BaseApi.signup(valueJson)
      .then( (res) => {
        if(res.ok) {
          BaseApi.login(valueJson.email, valueJson.password)
          .then((res)=> {
            console.log(res);
            if(res.ok) {
              let token = res.data.token;
              AsyncStorage.setItem('@user_token', token);
                AsyncStorage.setItem('@user_gender', "M");
            } else {
              //throw(res.problem);
              this.replaceRoute('home');
              AsyncStorage.setItem('@user_gender', "M");
            }
          })
          .then((res)=> {
            this.replaceRoute('home');
          })
          .catch((err)=> {
            this.replaceRoute('home');
           // alert(err);
          })
        } else {
          //alert(JSON.stringify(res.data));
        }
      })
      
    };
    this.replaceRoute('home');
  }

    componentDidMount() {

        BackAndroid.addEventListener('hardwareBackPress', function() {
            this.props.navigator.replacePrevious('signup');
            //this.replaceRoute('login');
            return true;
        }.bind(this));
    }


    render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Button transparent onPress={() => this.replaceRoute('login')}>
              <Icon style={{color:'white'}}  name="ios-arrow-back" />
          </Button>

              <Title style={styles.title} >회원가입</Title>


        </Header>

        <Content>

          <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
              <ScrollView>
                  <Form
                      ref="form"
                      type={Person}
                      options={options}
                      value={value}
                      style={{color:'white'}}
                  />


              <Button style={styles.btn} onPress={this.signupAct}>
                <Text style={styles.btnText} >다음단계</Text>
              </Button>
              </ScrollView>
              </View>
          </Image>

        </Content>
      </Container>
    );
  }
};

function bindAction(dispatch) {
  return {
      popRoute: () => dispatch(popRoute()),
      replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, bindAction)(Signup);
