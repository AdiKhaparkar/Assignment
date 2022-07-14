import React, {Component} from 'react';
import {View, TextInput,Text, StyleSheet,TouchableOpacity} from 'react-native';
import ImageScreen from './ImageScreen';
import HeaderComponent from './HeaderComponent';
class TextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {style, placeholder,image,name, onBlur, autoCapitalize, onChangeText} = this.props;
    return (
      <View>
        <HeaderComponent name={name} style={styles.HeadingStyle} />
      <View style={styles.placeholder}>
        <TouchableOpacity>
        <ImageScreen  style={styles.iconpass}  image={image}  />
        </TouchableOpacity>
        <View>
          <TextInput
            style={style}
            placeholder={placeholder}
            onBlur={onBlur}
            autoCapitalize={autoCapitalize}
            onChangeText={onChangeText}>
          </TextInput>
          
        </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  placeholder: {
    borderRadius:40,
    borderWidth: 1,
    flexDirection: 'row',
  },
  iconpass: {
    height: 15,
    width: 28,
    margin: 16,
  },
  HeadingStyle: {
    fontSize: 20,
    color: 'black',
    fontStyle:'italic',
    fontWeight:'600'
  },
});
export default TextInputComponent;
