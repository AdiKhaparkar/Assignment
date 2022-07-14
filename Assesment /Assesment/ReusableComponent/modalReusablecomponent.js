import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';

class ModalReusablity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let{password,FullName,HouseNo,StreetName,Area,City,State,MobileNumber,email}=this.state;

    return (
             
          <Text style={styles.ModaloutputText}>Password:{password}</Text>
       
    );
  }
}

const styles = StyleSheet.create({
  ChildView: {
    margin: 50,
    padding: 40,
    borderRadius: 10,
  },
  ModaloutputText:{
    fontSize: 15
  },
  ParentView: {
    flex: 1,
  },
});

export default ModalReusablity;
