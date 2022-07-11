
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

 class TextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() 
  {
      let{style,placeholder,onBlur,autoCapitalize,onChangeText}=this.props
    return (
      <View>
        <TextInput
            style={style}
            placeholder={placeholder}
            onBlur ={onBlur}
            autoCapitalize={autoCapitalize}
            onChangeText={onChangeText}>
        </TextInput>
      </View>
    );
  }
}
const styles = StyleSheet.create({})


export default TextInputComponent;