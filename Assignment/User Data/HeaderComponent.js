
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let{name,style}=this.props
    return (
      
        <Text style={style}> {name} </Text>
      
    );
  }
}

const styles = StyleSheet.create({})


export default HeaderComponent;