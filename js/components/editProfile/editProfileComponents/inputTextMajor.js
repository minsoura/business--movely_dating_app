/**
 * Created by min on 2016-11-27.
 */
import React, {PropTypes, Component} from 'react'
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  AsyncStorage,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
  BackAndroid,
} from 'react-native'
import { Container,Picker, Header, Title, Content, Text, Button, Icon, InputGroup, Input, Radio,} from 'native-base';
import { connect } from 'react-redux'
import styles from '../styles.js'
import testStyleSheet from './customStyle.js'

'use strict';




module.exports = function nickNameTemplate (locals) {

  if (locals.hidden) {

    return null;

  }



  var stylesheet = testStyleSheet;

  var formGroupStyle = stylesheet.formGroup.normal;

  var controlLabelStyle = stylesheet.controlLabel.normal;

  var textboxStyle = stylesheet.textbox.normal;

  var helpBlockStyle = stylesheet.helpBlock.normal;

  var errorBlockStyle = stylesheet.errorBlock;



  if (locals.hasError) {

    formGroupStyle = stylesheet.formGroup.error;

    controlLabelStyle = stylesheet.controlLabel.error;

    textboxStyle = stylesheet.textbox.error;

    helpBlockStyle = stylesheet.helpBlock.error;

  }



  if (locals.editable === false) {

    textboxStyle = stylesheet.textbox.notEditable;

  }


  var label = locals.label ? <Text style={stylesheet.customTextStyle}>{locals.label}</Text> : null;

  var help = locals.help ? <Text style={helpBlockStyle}>{locals.help}</Text> : null;

  var error = locals.hasError && locals.error ? <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>{locals.error}</Text> : null;



  return (
    <View >
      <InputGroup style={styles.input}>
        <Icon name="ios-list" style={styles.personIcon}/>
        {label}
        <Input

          accessibilityLabel={locals.label}

          ref="input"

          autoCapitalize={locals.autoCapitalize}

          autoCorrect={locals.autoCorrect}

          autoFocus={locals.autoFocus}

          blurOnSubmit={locals.blurOnSubmit}

          editable={locals.editable}

          keyboardType={locals.keyboardType}

          maxLength={locals.maxLength}

          multiline={locals.multiline}

          onBlur={locals.onBlur}

          onEndEditing={locals.onEndEditing}

          onFocus={locals.onFocus}

          onLayout={locals.onLayout}

          onSelectionChange={locals.onSelectionChange}

          onSubmitEditing={locals.onSubmitEditing}

          placeholderTextColor={locals.placeholderTextColor}

          secureTextEntry={locals.secureTextEntry}

          selectTextOnFocus={locals.selectTextOnFocus}

          selectionColor={locals.selectionColor}

          numberOfLines={locals.numberOfLines}

          underlineColorAndroid={locals.underlineColorAndroid}

          clearButtonMode={locals.clearButtonMode}

          clearTextOnFocus={locals.clearTextOnFocus}

          enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}

          keyboardAppearance={locals.keyboardAppearance}

          onKeyPress={locals.onKeyPress}

          returnKeyType={locals.returnKeyType}

          selectionState={locals.selectionState}

          onChangeText={(value) => locals.onChange(value)}

          onChange={locals.onChangeNative}

          placeholder={locals.placeholder}

          style={styles.inputStyle}

          value={locals.value}

        />




      </InputGroup>{error}</View>
  );
}


