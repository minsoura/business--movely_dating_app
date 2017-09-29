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
import dummies from '../card/dummyCards';
import BaseApi from '../../services/BaseApi';
import Spinner from 'react-native-loading-spinner-overlay';
import ImagePicker from 'react-native-image-picker';
// import * as ImageCropPicker from 'react-native-image-crop-picker';
// var ImageCropPicker = require('react-native-image-crop-picker').default;
import * as ImageCropPicker from "react-native-image-crop-picker";
import t from 'tcomb-form-native';
import styles from './styles';
import { replaceRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';


/* for dummy data*/
var femaleCards = dummies.femaleCards;
var maleCards = dummies.maleCards;
var {height, width} = Dimensions.get('window');
var imageHolder= require('../../../images/imageHolder.png');
var logoImage = require('../../../images/cupid.png');
const appLogo = require('../../../images/movely.png');

var emptyArray =[];
var interestReadyRowOne = [];
var interestReadyRowTwo = [];
var imageReadyFemale =[];
var imageReadyMale =[];
var profileReady =[];
var mainImageHolder ='../../../images/tinder/placeholder.jpg';





class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      me : {
        medias: []
      },
      mainMediaPos: 0,
      interestsRowOne:interestReadyRowOne,
      interestsRowTwo:interestReadyRowTwo,
      mainImageSource:"",
      imageArray:emptyArray,
      mainVideoSource:"",
      verifier:'video',
      thumbnail:"default",
      videoArray:null,
      profileJSON:emptyArray,
      name: "",
      isMediaSelected: false,
      isSpinnerVisible: true,
    }
  }
  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }
  editProfileAct() {
    console.log(this.state.me);
    var obj = {id: this.state.me.id, mediaIds: this.state.me.mediaIds};
    BaseApi.updateProfile(obj)
    .then((res)=> {
      console.log(res);
      if(res.ok) {
        this.props.popRoute();
      }
    })
  }

  componentDidMount() {
    BaseApi.me()
    .then((res)=> {
      if(res.ok) {
        // 첫 media가 사진이면 뒤로 밀려나도록..
        if(res.data.medias[0] && res.data.medias[0].type == "image") {
          res.data.medias = [null].concat(res.data.medias);
        }
        this.setState({me: res.data});
        this.setState({mainMediaPos: 0});
      }
    })
  }

  changeMainMedia(idx, type) {
    this.setState({
      mainMediaPos: idx,
    });
  }

  componentWillMount() {
    imageReadyMale = [];
    imageReadyFemale = [];
    profileReady =[];
    interestReadyRowOne = [];
    interestReadyRowTwo = [];
  }

  genderVerifyingFunction = async()=>{
    try{
        var genderValue = await AsyncStorage.getItem("@user_gender")
        var cardIndex = await AsyncStorage.getItem("@card_index")
        var intCardIndex = JSON.parse(cardIndex);

        if(genderValue !==null && genderValue == "M" && intCardIndex !== null){

            for(let index2 in femaleCards[intCardIndex].image[0]){
                imageReadyFemale.push(femaleCards[intCardIndex].image[0][index2]);
            }
            for(let index in femaleCards[intCardIndex].interestsGroup[0]){
                interestReadyRowOne.push(femaleCards[intCardIndex].interestsGroup[0][index]);
            }

            for(let index in femaleCards[intCardIndex].interestsGroup[1]){
                interestReadyRowTwo.push(femaleCards[intCardIndex].interestsGroup[1][index]);
            }
            this.setState({
                imageArray:imageReadyFemale,
                mainImageSource:imageReadyFemale[0],
                mainVideoSource:femaleCards[intCardIndex].video[0].link1,
                thumbnail:femaleCards[intCardIndex].videoThumbnail,
                profileJSON:femaleCards[intCardIndex],
                name : femaleCards[intCardIndex].first_name,
                interestsRowOne:interestReadyRowOne,
                interestsRowTwo:interestReadyRowTwo,
            })

        } else if(genderValue !==null && genderValue == "F" && intCardIndex !== null){

            for(let index2 in maleCards[intCardIndex].image[0]){
                imageReadyMale.push(maleCards[intCardIndex].image[0][index2]);
            }

            for(let index in maleCards[intCardIndex].interestsGroup[0]){
                interestReadyRowOne.push(maleCards[intCardIndex].interestsGroup[0][index]);
            }

            for(let index in maleCards[intCardIndex].interestsGroup[1]){
                interestReadyRowTwo.push(maleCards[intCardIndex].interestsGroup[1][index]);
            }

            this.setState({
                imageArray:imageReadyMale,
                mainImageSource:imageReadyMale[0],
                mainVideoSource:maleCards[intCardIndex].video[0].link1,
                thumbnail:maleCards[intCardIndex].videoThumbnail,
                profileJSON:maleCards[intCardIndex],
                name : maleCards[intCardIndex].first_name,
                interestsRowOne:interestReadyRowOne,
                interestsRowTwo:interestReadyRowTwo,
            })


        }
    }catch (e){
        alert(e);
    }
  }


  selectMedia(idx, type) {
    if(type == 'image') {
      ImageCropPicker.default.openPicker({
        width: 400,
        height: 400,
        cropping: true,
        cropperTintColor:{
          setToolbarColor:"#bcbddb",
          setActiveWidgetColor:"#bcbddb",
        },

      }).then(image => {
        console.log(image);
        const file = { uri: image.path, mime: image.mime};
        return this.uploadMedia(file, type, idx);
        // this.setState({
        //   mainMediaPos: idx,
        //   isMediaSelected: true
        // })
      });
    } else {
      var options = {
        title: '비디오 선택',
        customButtons: [
          {name: 'delete', title: "삭제"},
        ],
        cancelButtonTitle:'취소',
        chooseFromLibraryButtonTitle:'갤러리에서 영상 선택',
        takePhotoButtonTitle:'카메라로 영상 올리기',
        storageOptions: {
          skipBackup: true,
          path: 'medias'
        },
        mediaType: type
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          console.log(Platform.OS);
          if (Platform.OS === 'ios') {
            var fileName = response.uri.slice(response.uri.lastIndexOf('/')+ 1);
          } else {
            var fileName = response.path.slice(response.path.lastIndexOf('/')+ 1);
          }
          const extension = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();
          const file = { uri: response.uri, filename: fileName };//filename: response.uri.slice(response.uri.lastIndexOf('/')+ 1)}

          if(extension == 'mp4') {
            file.mime = "video/mp4";
          } else if(extension == "mov") {
            file.mime = "video/quicktime";
          } else if (extension == 'avi') {
            file.mime = "video/x-msvideo";
          } else {
            file.mime = "video/mp4";
          }
          // or a reference to the platform specific asset location
          // if (Platform.OS === 'ios') {
          //   file.filepath = response.uri.replace('file://', '')
          // } else {
          //   file.filepath = response.uri;
          // }
          return this.uploadMedia(file, type, idx);
          // this.setState({
          //   mainVideoSource: response.uri,
          //   mainMediaPos: idx,
          //   isMediaSelected: true
          // })

          // You can display the image using either data...
          // const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        }
      })
    }
  }
  uploadMedia (file, type, idx) {
    params = {type: type};
    if(!file.filename) {
      file.filename = file.uri.slice(file.uri.lastIndexOf('/')+ 1);
    }
    // const file = { name: "file", uri: response.uri};
    if (Platform.OS === 'ios') {
      file.filepath = file.uri.replace('file://', '')
    } else {
      file.filepath = file.uri;
    }
    console.log(file);
    this.setState({isSpinnerVisible: true});
    BaseApi.uploadMedia(file, params)
    .then((res)=> {
      this.setState({isSpinnerVisible: false});
      console.log(res);
      var data = res.data;
      me = this.state.me;
      me.medias[idx] = data;
      mediaIds = [];
      me.medias.forEach((elm, idx)=> {
        mediaIds.push(elm.id);
      })
      me.mediaIds = mediaIds;
      this.setState({me: me});
      this.setState({
        mainMediaPos: idx,
        isMediaSelected: true
      })
    })
    .then((res)=> {
      var obj = {id: this.state.me.id, mediaIds: this.state.me.mediaIds};
      BaseApi.updateProfile(obj)
    })
    .catch((err)=> {
      this.setState({isSpinnerVisible: false});
      alert(err);
    })
  }
  renderMediaList() {
    var mediaIdList = [0,1,2,3,4,5];
    var _this = this;
    var me = this.state.me;
    var category = "";
    return (
      <View style={styles.thumbnailContainer}>

          <ScrollView horizontal={true} scrollEnabled={true}>
          {mediaIdList.map(function(idx) {
            if (idx == 0) {
              var type = "video";
              category = "Video"
            } else if(idx==1) {
              var type = "image";
              category = "Photos";
            } else{
              var type = "image";
              category = "";

            }
            // console.log(me.medias[idx]);
            // console.log(me.medias[idx].media);
            return (
              <View key={idx}>
                <Text style={styles.title}>
                  {category}
                </Text>
                <TouchableHighlight underlayColor={'#bcbddb'} style={{borderRadius:5}} onPress={me.medias[idx] ? _this.changeMainMedia.bind(_this, idx, type) : _this.selectMedia.bind(_this, idx, type)} key={idx}>
                  <Image source={
                    me.medias[idx] ?
                    {uri: me.medias[idx].thumbnailUrl}
                    : require('../../../images/tinder/placeholder.jpg')

                  } style={styles.thumbnail} />
                </TouchableHighlight>
              </View>
            )
          })}</ScrollView></View>

    )
  }

  renderMainMedia () {

    var mainMedia = this.state.me.medias[this.state.mainMediaPos];

    if(!mainMedia && !this.state.isMediaSelected) {
      mainMedia = {thumbnailUrl: "http://blossome.be/movely/bunny.jpg", mediaUrl:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", type: "video"};

    }else if(!mainMedia ){
      mainMedia = {thumbnailUrl: "http://blossome.be/movely/imageHolder.png", mediaUrl:"http://blossome.be/movely/imageHolder.png", type: "image"};
    }

    return <View style={{alignSelf: "stretch", alignItems: 'center',}}>
      {mainMedia.type == "video" ?
      <VideoPlayer
        endWithThumbnail={true}
        style={{height: width, width: width}}
        thumbnail={{ uri: mainMedia.thumbnailUrl }}
        video={{ uri: mainMedia.mediaUrl}}
        // video = {{uri: "http://blossome.be/movely/chaVideo.mp4"}}
        videoWidth={width}
        videoHeight={width}
        resizeMode="cover"
        customStyles={{seekBarProgress:{backgroundColor:"#bcbddb"}}}
        hideControlsOnStart={false}
        autoplay={false} />
      :
      <Image
        resizeMode="contain"
        source={{uri: mainMedia.mediaUrl}}
        style={{width:width, height:width,backgroundColor:'floralwhite'}} />
      }
      {false ?
      <Button
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        재생
      </Button> : null }
      {true || this.state.isMediaSelected== true ?
        <Button
          style={{alignSelf:'center', width:width,}}
          backgroundColor={'#bcbddb'}
          styleDisabled={{color: 'red'}}
          onPress={() => this.selectMedia(this.state.mainMediaPos, mainMedia.type)}>
          <Text style={{fontSize:17, color:'white', fontWeight:'bold'}}>변경</Text>

        </Button> : null
      }
    </View>
  }
  renderConfigList () {
    return <List style={styles.list}>
      <ListItem style={styles.listITem} button onPress={() => this.props.pushNewRoute('editProfile')} >
        <Text style={styles.textInListITem}>프로필수정</Text>
      </ListItem>
      <ListItem style={styles.listITem}  button onPress={this.actLogout} >
        <Text style={styles.textInListITem}>로그아웃</Text>
      </ListItem>
      <ListItem style={styles.listITem}  button onPress={() => this.props.pushNewRoute('blankPage')} >
        <Text style={styles.textInListITem}>화살충전하기</Text>
      </ListItem>
      <ListItem style={styles.listITem}  button  onPress={() => this.props.pushNewRoute('blankPage')} >
        <Text style={styles.textInListITem}>푸시 알람 설정</Text>
      </ListItem>
      <ListItem style={styles.listITem}  button  onPress={() => this.props.pushNewRoute('blankPage')} >
        <Text style={styles.textInListITem}>계정 설정하기</Text>
      </ListItem>
      <ListItem style={styles.listITem}  button  onPress={() => this.props.pushNewRoute('blankPage')} >
        <Text style={styles.textInListITem}>공지사항</Text>
      </ListItem>
      <ListItem style={styles.listITem}  button  onPress={() => this.props.pushNewRoute('blankPage')} >
        <Text style={styles.textInListITem}>고객센터</Text>
      </ListItem>
    </List>
  }
  actLogout = ()=> {
    AsyncStorage.removeItem('@user_token')
    .then(()=> {
      AsyncStorage.getItem("@user_token")
      this.props.pushNewRoute('login')
    })
  }
  render() {
    return (
      <Container style={{flex:1}}>
        
        <Header style={{backgroundColor:"#bcbddb"}}>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-backspace" color={'white'} />
          </Button>
          <Title style={{fontWeight:'bold', fontSize:20}}>환경설정</Title>

        </Header>
        <Spinner visible={this.state.isSpinnerVisible} size="large" color="#ff0000"/>

        <ScrollView style={styles.container}>

          {this.renderMainMedia()}
          {this.renderMediaList()}
          {this.renderConfigList()}
        </ScrollView>

      </Container>
    )
  }
}
//onPress = {() => this.renderNope()}


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
    replaceRoute: route => dispatch(replaceRoute(route)),
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
