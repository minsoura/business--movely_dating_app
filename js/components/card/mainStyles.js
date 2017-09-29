const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        backgroundColor: '#f7f7f7',
    },
    passButtons:{
        width:50,
        height:50,
        borderWidth:5,
        alignSelf:'center',
        backgroundColor:'#bcbddb',
        borderColor:'#e7e7e7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 25
    },
    likeButton: {
        width:50,
        height:50,
        borderWidth:5,
        alignSelf:'center',
        backgroundColor:'pink',
        borderColor:'#e7e7e7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
    },
    buttonSmall:{
        width:50,
        height:50,
        borderWidth:5,
        borderColor:'#e7e7e7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
    },
    buttonIconStyle: {
        backgroundColor: "transparent",
        marginTop: 5,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#e3e3e3',
        backgroundColor:'floralwhite',
        width: 340,
        height: 410,

    }

});
