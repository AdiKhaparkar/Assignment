import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import FrontPage from './frontPage/frontPage';

export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
        <FrontPage/>
      
    );
  }
}

const styles = StyleSheet.create({})