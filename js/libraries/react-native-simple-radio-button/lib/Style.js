var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
} = ReactNative;

var Style = StyleSheet.create({
  radioForm: {
  },

  radioWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,

  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 20,
    height: 20,
    marginRight:20,

    alignSelf: 'center',

    borderColor: '#2196f3',
    borderRadius: 20,
  },

  radioLabel: {
    paddingLeft: 10,
    lineHeight: 20,

  },

  radioNormal: {
    borderRadius: 10,
  },

  radioActive: {
    width: 10,
    height: 10,
    backgroundColor: '#2196f3',
  },

  labelWrapStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',

  },

  labelVerticalWrap: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight:10,
  },

  labelVertical: {
    paddingLeft: 0,
  },

  formHorizontal: {
    flexDirection: 'row',
    marginLeft:20
  },
});

module.exports = Style;
