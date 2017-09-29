/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { popRoute } from '../../actions/route';
import VideoPlayer from 'react-native-video-player';
import { openDrawer } from '../../actions/drawer';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  Platform,
  AsyncStorage,
  TouchableHighlight
} from 'react-native';
import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem } from 'native-base';
var {height, width} = Dimensions.get('window');
import BaseApi from '../../services/BaseApi';
import t from 'tcomb-form-native';
var Form = t.form.Form;
import styles from './styles';
const background = require('../../../images/login_bg2.png');

// var customInputTemplate= require('./editProfileComponents/inputTextEmail.js');


var customInputTemplate= require('./editProfileComponents/inputTextNickName.js');
var customBodyTemplate= require('./editProfileComponents/inputTextBodyType.js');
var customHeightTemplate= require('./editProfileComponents/inputTextHeight.js');
var customJobTemplate= require('./editProfileComponents/inputTextJob.js');
var customMajorTemplate= require('./editProfileComponents/inputTextMajor.js');
var customSchoolTemplate= require('./editProfileComponents/inputTextSchool.js');
var customCompanyTemplate= require('./editProfileComponents/inputTextCompany.js');
var customPersonalityTemplate= require('./editProfileComponents/inputTextPersonality.js');
var customLocationTemplate= require('./editProfileComponents/selectRegion.js');


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
});

    // school = models.CharField(max_length=255, blank=True)
    // major = models.CharField(max_length=255, blank=True)
    // job = models.CharField(max_length=255, blank=True)
    // company = models.CharField(max_length=255, blank=True)
    // personality = models.CharField(max_length=255, blank=True)
    // REGION_CHOICES = (
    //     ("SE", '서울'),
    //     ("KKI", '경기 - 일산'),
    //     ("KKU", '경기 - 의정부'),
    //     ("KKA", '경기 - 안양'),
    //     ("KKB", '경기 - 분당'),
    //     ("KKS", '경기 - 수원'),
    //     ("KKE", '경기 - 기타'),
    //     ("IC", '인천'),
    //     ("KW", '강원'),
    //     ("CB", '충북'),
    //     ("CN", '충남'),
    //     ("DJ", '대전'),
    //     ("KB", '경북'),
    //     ("DG", '대구'),
    //     ("KN", '경남'),
    //     ("BS", '부산'),
    //     ("US", '울산'),
    //     ("JB", '전북'),
    //     ("JN", '전남'),
    //     ("KJ", '광주'),
    //     ("JJ", '제주'),
    // )
    // region = models.CharField(
    //     max_length=3, choices=REGION_CHOICES)
    // height = models.PositiveIntegerField(null=True)
    // body_type = models.CharField(max_length=255, blank=True)
    // description = models.CharField(max_length=255, blank=True)

class Profile extends Component {
  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  constructor(props){
    super(props);
    this.tcomStruct = t.struct({
      username:t.Str,
      // birthday: t.Date,
      region: Location,
      school: t.Str,
      major: t.Str,
      job: t.Str,
      company: t.Str,
      personality: t.Str,
      height: t.Number,
      bodyType: t.Str,
    });
    this.tcombOptions = {
      fields: {
        username: {
          disabled: false,
          editable: false,
          template:customInputTemplate,
        },
        birthday: {
          disabled: true,
        },
        region:{
          label:"지역",
          error: '*필수입력',
          template:Platform.OS === 'ios' ? null : customLocationTemplate,
        },
        school:{
          error: '*필수입력',
          label:"출신대학",
          placeholderTextColor:'white',
          placeholder:'출신대학',
          template:customSchoolTemplate
        },
        major:{
          error: '*필수입력',
          label:"전공",
          placeholderTextColor:'white',
          placeholder:'전공',
          template:customMajorTemplate
        },
        job:{
          error: '*필수입력',
          label:"직업",
          placeholderTextColor:'white',
          placeholder:'직업',
          template:customJobTemplate
        },
        company:{
          error: '*필수입력',
          label:"직장",
          placeholderTextColor:'white',
          placeholder:'직장',
          template:customCompanyTemplate
        },
        personality:{
          error: '*필수입력',
          label:"성격",
          placeholderTextColor:'white',
          placeholder:'성격',
          template:customPersonalityTemplate
        },
        height:{
          error: '*필수입력',
          label:"키",
          placeholderTextColor:'white',
          placeholder:'신장(키)',
          template:customHeightTemplate
        },
        bodyType:{
          error: '*필수입력',
          label:"체형",
          placeholderTextColor:'white',
          placeholder:'체형',
          template:customBodyTemplate
        },

      /*  birthday:{
          error: '*필수입력',
          mode: 'date',
          disabled:true,
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
        },
        phoneNumber: {
          disabled: true,
        },*/
      }
    }

    this.state = {
      me : {
        email: '',
        username: "",
        password: '',
        gender: 'M',
        phoneNumber: '',
        region: 'SE',
        birthday: new Date('1983', '10', '09'),
        school: "",
        major: "",
        job: "",
        company: "",
        personality: "",
        height: "",
        bodyType: "",
      },
    };
  }

  popRoute() {
    this.props.popRoute();
  }
  editProfileAct = ()=> {
    var value = this.refs.form.getValue();
    if (value) {
      var me = {
        id : this.state.me.id,
        region: value.region,
        school: value.school,
        major: value.major,
        job: value.job,
        company: value.company,
        personality: value.personality,
        height: value.height,
        bodyType: value.bodyType,
      };
      BaseApi.updateProfile(me)
      .then((res)=> {
        if(res.ok) {
          this.props.popRoute();
        }
      })
    }
  }

  componentDidMount() {
    BaseApi.me()
    .then((res)=> {
      console.log(res.data);
      if(res.data.birthday) {
        res.data.birthday = new Date(res.data.birthday.slice(0,4), res.data.birthday.slice(5,7), res.data.birthday.slice(8,10));
      }
      if(res.ok) {
        this.setState({me: res.data});
      }
    })
  }
  onChange(me) {
    this.setState({me});
  }


  render() {
    return (

        <Container style={styles.container}>
          <Header style={styles.header}>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon style={{color:'white'}}  name="ios-arrow-back" />
            </Button>

            <Title style={styles.title} >프로필 수정</Title>


          </Header>

          <Content>

          <Image source={background} style={styles.shadow}>
          <View style={styles.bg}>
        <ScrollView>

          <Form
            ref="form"
            type={this.tcomStruct}
            options={this.tcombOptions}
            value={this.state.me}
            onChange={(me) => this.onChange(me)}
            style={{color:'black'}} />
          <Button style={styles.btn} onPress={this.editProfileAct}>
            <Text style={styles.btnText} >입력완료</Text>
          </Button>
        </ScrollView>
          </View>
          </Image>
          </Content>

      </Container>
    )
  }
}
//onPress = {() => this.renderNope()}


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(Profile);
