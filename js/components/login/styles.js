
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 2.5,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 80,
  },
  input: {
    marginBottom: 20,
  },
    signUpStyle: {
        color:'white',
        fontSize:20,
        lineHeight: 25,
    },

    forgotPasswordStyle:{
        color:'white',
        fontSize:20,
        lineHeight: 25,
        marginBottom:20,
    },
    inputStyle:{
        color:'white',
        fontSize:20,
    },

  btn: {
      marginTop: 20,
      backgroundColor:"#bcbddb",
      alignSelf: 'center',
      width:deviceWidth*0.6,
      height:50,
      borderRadius:30,
      padding:10,
      marginBottom:50,


  },
    btnText:{
        color:'white',
        fontSize:20,

    },
  personIcon:{
    color:'white',
  },
    lockIcon:{
        color:'white',
    },
});
