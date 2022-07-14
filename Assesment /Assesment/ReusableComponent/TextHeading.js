
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let{name}=this.props;
    return (
      
        <Text style={styles.HeadingStyle}> {name} </Text>
      
    );
  }
}

const styles = StyleSheet.create({
    HeadingStyle: {
        fontSize: 20,
        color: 'black',
        fontStyle:'italic',
        fontWeight:'600'
      },
})


export default HeaderComponent;