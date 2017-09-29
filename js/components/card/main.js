/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  AsyncStorage,
  Button,
  TouchableOpacity,
  View
} from 'react-native';
// import Nav from './global-widgets/nav'
var {height, width} = Dimensions.get('window');
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { replaceRoute, replaceOrPushRoute, pushNewRoute } from '../../actions/route';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import styles from './mainStyles';
import dummies from './dummyCards' ;

var female = dummies.femaleCards;
var male = dummies.maleCards;

var logoImage = require('../../../images/cupid.png')
var imageHolder = require('../../../images/imageHolder.png')

var empty=[{
    "id": 0,
    "first_name": "movely",
    "job":"movely",
    "age": "movely",
    "friends": "",
    "interests": "",
    "image": imageHolder,
}];
class CardMain extends Component {
  constructor(props){
    super(props)
    this.state = {

        id:0,

    }
  }

  genderVerifyingFunction = async()=>{
      //AsyncStorage.setItem("@user_gender","male");
    try{
    var testValue = await AsyncStorage.getItem("@user_gender")
        if(testValue !==null && testValue == "M"){
                this.setState({
                    cards: female
                })
        } else if(testValue !==null && testValue == "F"){
                this.setState({
                    cards: male
                })

        }

    }catch (e){
      alert(e);
}
  }

  bringCardIndex = async()=>{
     var cardIndex =JSON.stringify(this.refs['swiper']._getNumbOfErasedCards()+this.refs['swiper']._getCardIndex());
    // alert(cardIndex);
     await AsyncStorage.setItem('@card_index',cardIndex);

  }

  componentWillMount(){

    this.genderVerifyingFunction();


  }
  Card(x){

    return (

      <TouchableOpacity style={styles.card} onPress = {() => this.gotoProfile()}>
        <View style={{flex:1, flexDirection:'row',justifyContent:'center', alignSelf:'center',height:70, backgroundColor:"floralwhite",}}>
          <Image source={{uri:x.videoThumbnail}} resizeMode="cover" style ={{width:60, height:60, borderRadius:60, margin:5,}} />
          <View style={{flex:5, justifyContent:'center',}}>
            <Text style={{fontSize:15, fontWeight:'bold',}}>{x.first_name}{" (" + x.age+"세)"}</Text>
            <Text style={{fontSize:15,}}>{x.job}</Text>
          </View>
          <View style={{width:80, justifyContent:'center', alignSelf:'center'}}>
          <Image source={logoImage} resizeMode="contain" style ={{width:45, height:45, alignSelf:'center' }} />
          </View>
        </View>
        <View style={{}}>
        <TouchableOpacity  >

            <VideoPlayer
                playInBackground={false}
                playWhenInactive={false}
                endWithThumbnail={true}
                style={{height: 330, width: width, padding:15, alignSelf:'center'}}
                thumbnail={{uri:x.videoThumbnail}}
                video={{uri:x.video[0].link1}}
                videoWidth={width}
                videoHeight={330}
                resizeMode="cover"
                customStyles={{seekBarProgress:{backgroundColor:"#bcbddb"}}}
                hideControlsOnStart={true}
                autoplay={false}
            />

        </TouchableOpacity>
        </View>
        <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        </View>
      </TouchableOpacity>
    )
  }
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  noMore(){
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }
  gotoProfile(){
    console.log('hello!!');
    console.log(this.props.pushNewRoute);
    // dispatch(pushNewRoute(route))
     this.bringCardIndex();

     this.props.pushNewRoute('cardProfile', 2);
    // pushNewRoute('blankPage', 1);
    // pushNewRoute('cardProfile', 1);

  }
  yup(){

    this.refs['swiper']._goToNextCard()
  }

  nope(){

    this.refs['swiper']._goToNextCard()

  }

  render() {
    return (
      <View style={styles.container}>

      <SwipeCards
        ref = {'swiper'}
        cards={this.state.cards}
        containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', marginTop:5, marginBottom:20,}}
        renderCard={(cardData) => this.Card(cardData)}
        renderNoMoreCards={() => this.noMore()}
        handleYup={this.handleYup}
        handleNope={this.handleNope} />


        <View style={{flexDirection:'row', justifyContent:'space-around', width:200, alignSelf:'center'}}>
          <View>
            <TouchableOpacity style={styles.passButtons} onPress = {() => this.nope()}>
              <Iconz name='ios-close-circle' size={36} color="white" style={styles.buttonIconStyle} />

            </TouchableOpacity>
            <Text style={{alignSelf:'center', fontWeight:'bold'}}>넘기기</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonSmall} onPress = {() => this.gotoProfile()}>
              <Iconz name='ios-expand' size={30} color="#888" style={{}} />
            </TouchableOpacity>
            <Text style={{alignSelf:'center', fontWeight:'bold'}}>프로필</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.likeButton} onPress = {() => this.yup()}>
              <Iconz name='ios-heart' size={36} color="white" style={styles.buttonIconStyle} />
            </TouchableOpacity>
            <Text style={{alignSelf:'center', fontWeight:'bold',}}>좋아요</Text>
          </View>
          </View>
        </View>
    )
}
}
//onPress = {() => this.renderNope()} 



function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    pushNewRoute: route => dispatch(pushNewRoute(route))
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

export default connect(mapStateToProps, bindAction)(CardMain);
