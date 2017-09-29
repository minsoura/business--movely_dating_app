
const React = require('react-native');

const { StyleSheet , Dimensions} = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  title: {
    left:-20,
    alignSelf: 'center',
  },
  header:{
    alignItems:'center',
    backgroundColor:'rgba(168,189,218,1)',

  },
  bg: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 80,
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
    fontSize:17,
  },
  input: {
    marginTop: 20,
  },
  inputStyle:{
    color:'white',
    fontSize:17,
  },
  radioTextStyle:{
    color:'white',
    fontSize:17,
    paddingLeft:10,
    textDecorationLine:'none',
  },
  personIcon:{
    color:'white',
  },
  lockIcon:{
    color:'white',
  },
  radiosWrapView:{
    flex:1,
    flexDirection:'row',
    borderBottomWidth: 1,
    borderBottomColor:'white',
  },
  radioIconView:{
    flexDirection:'row',
    justifyContent:'center'
  },
  radioFormView:{
    justifyContent:'flex-start'

  },
  datePickerWrapView:{
    marginTop:10,
    paddingBottom:10,
    flex:1,
    flexDirection:'row',
    borderBottomWidth: 1,
    borderBottomColor:'white',
  },
  datePickerView:{
    justifyContent:'center',
    flexDirection:'row',
    alignSelf:'center',
    padding:5,
    flex:1,

  },
  datePickerIconView:{
    justifyContent:'center',
    flexDirection:'row',
    paddingTop:10
  },
  datePickerTextStyle:{
    color:'white',
    fontSize:17,
    marginLeft:12,
    marginRight:25,

  },



  //////////////custom styling
  customHomeIcon:{
    color:'white',
  },
  customTextStyle:{
    color:'white',
    fontSize:17,
    paddingLeft:10,
    textDecorationLine:'none',

  },
  customViewWrapStyle:{
    flex:1,
    flexDirection:'row',
    paddingLeft:5,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    borderBottomWidth: 1, borderBottomColor:'white',
  },
  customViewIconStyle:{
    paddingTop:8,
    flexDirection:'row'
  },
  customViewPickerStyle:{
    borderStyle:'solid',
    flex:1,
    borderWidth:1,
    borderColor:'white',
    justifyContent:'center',
    marginLeft:30,
  },
  customPickerStyle:{
    flex:1,
    color:'white',
  },
  customItemStyle:{
    fontSize:17,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
  },
  customViewDateStyle:{
    justifyContent:'center',
    marginLeft:15,

  },
  customValueStyle:{
    color:'white',

    fontSize:17,
  }
});


