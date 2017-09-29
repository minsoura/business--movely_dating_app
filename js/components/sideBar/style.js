
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'floralwhite',

  },
  sidebar: {
    margin: 0,
    padding: 0,
    left: -5,
    paddingBottom: 25,
    paddingTop: 30,
    backgroundColor: 'floralwhite',
  },

  mainImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
  },
  mainImageBox: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  listStyle: {
    justifyContent:'center',
    borderBottomWidth: 0,
    alignSelf:'center',
    alignItems:'center',
    margin:0,
    padding:0,
  },
  textStyle: {
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    borderBottomWidth:1,
    borderBottomColor:"#bcbddb",
    fontSize:18,
    padding:15,
    fontWeight:'bold',
    color:'dimgray'
  }
});
