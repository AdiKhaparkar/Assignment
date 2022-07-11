import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginPage from './User Data/UserData';
export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
        <LoginPage/>
      
    );
  }
}

const styles = StyleSheet.create({})

