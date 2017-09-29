/*

  a bootstrap like style

*/
'use strict';

var LABEL_COLOR = 'white';
var INPUT_COLOR = 'white';
var ERROR_COLOR = '#a94442';
var HELP_COLOR = '#999999';
var BORDER_COLOR = 'white';
var DISABLED_COLOR = '#777777';
var DISABLED_BACKGROUND_COLOR = '#eeeeee';
var FONT_SIZE = 17;
var FONT_WEIGHT = '500';

var stylesheet = Object.freeze({

  fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10
    },
    error: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: 12,
    marginBottom: 2,
    color: ERROR_COLOR
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      padding: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      padding: 7,
      borderRadius: 4,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 36,
      padding: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      marginBottom: 5,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  select: {
    normal: {
      //marginBottom: 4,
        flex:1,

        padding:10,
        width:100,
      borderWidth:1,
      borderColor:'white',
      color:'white',
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    },
    error: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  pickerValue: {
    normal: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    },
    error: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  dateTouchable: {
    normal: {},
    error: {}
  },
  dateValue: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    }
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
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

      alignSelf:'center',
       alignItems:'center',
       justifyContent:'center',
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

module.exports = stylesheet;
