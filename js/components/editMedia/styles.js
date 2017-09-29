
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({

  thumbnail: {
    height:50,
    width:50,
    margin:5,
    borderRadius:5,
  },
  thumbnailContainer:{
    flexDirection: 'column',
    marginBottom: 0,
    alignItems: 'flex-start',
    marginTop: 0, borderWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: 'white',
  },
  title:{
    width:50,
    textAlign:'center',
    marginLeft:5,
    color:'dimgray',
    marginRight:5,
    height:15,
  },
  container: {
    flex:1,
    backgroundColor: 'floralwhite',


    },
  list:{
    paddingLeft:0,
    marginLeft:0,


  },
  listITem:{
    borderBottomWidth:1,
    paddingLeft:0,
    borderBottomColor:'#bcbddb',
    marginLeft:0,
    left:0

  },
  textInListITem:{
    paddingLeft:0,
    marginLeft:0,
    textAlign:'center',
    fontSize:20,
    color:'dimgray',
    left:0,
    right:0,
    fontWeight:'bold',
    paddingTop:10,
    paddingBottom:10,
  }
});
