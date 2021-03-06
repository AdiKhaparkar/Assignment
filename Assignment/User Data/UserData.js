import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import TextInputComponent from './TextInput';
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      NameError: '',
      emailError: '',
      EnteredEmail: '',
      EnteredPassword: '',
      passwordError: '',
      show: false,
      HouseNo: '',
      StreetName: '',
      Area: '',
      City: '',
      State: '',
      MobileNumber: '',
      EnteredName: '',
      ConfirmPassword: '',
    };
  }
  FullName = () => {
    if (this.state.EnteredName == '') {
      this.setState({NameError: 'Please enter a Valid Name'});
    } else {
      this.setState({NameError: 'Entered Name Matched with the record'});
    }
  };
  CheckEmail = () => {
    if (this.state.EnteredEmail == ' ') {
      this.setState({emailError: 'Valid Email ok '});
    } else {
      this.setState({emailError: 'Please enter a Valid Email '});
    }
  };
  passwordValidator = () => {
    if (this.state.EnteredPassword == this.state.ConfirmPassword) {
      this.setState({passwordError: 'Password matched successfully'});
    } else {
      this.setState({passwordError: 'Please enter a Valid Password'});
    }
  };
  secureTextEntry = () => {
    this.state.secureTextEntry
      ? this.setState({secureTextEntry: false})
      : this.setState({secureTextEntry: true});
  };
  RepeatPassword = () => {
    this.state.password == this.state.EnteredPassword
      ? alert('Password Matched')
      : alert('Entered Password Does not matched ');
  };
  FinalValidator = () => {
    if (this.state.EnteredName === '') {
      this.setState({show: false});
    } else if (this.state.EnteredEmail === '') {
      this.setState({show: false});
    } else if (this.state.EnteredPassword === '') {
      this.setState({show: false});
    } else if (this.state.ConfirmPassword === '') {
      this.setState({show: false});
    } else if (this.state.MobileNumber === '') {
      this.setState({show: false});
    } 
    else if (
      this.state.HouseNo === '' &&
      this.state.EnteredName === '' &&
      this.state.StreetName === '' &&
      this.state.City === '' &&
      this.state.State === '' &&
      this.state.MobileNumber === ''
    )
    { alert('Check Address Details '); } 
    


    else {
      this.setState({show: true});
    }
  };

  render() {
    return (
      <ScrollView style={styles.WholeBackground}>
        <TextInputComponent
          placeholder={'First and Last Name'}
          onBlur={() => this.FullName()}
          autoCapitalize="words"
          onChangeText={text => this.setState({EnteredName: text})}
          image={require('../AssetImage/User.jpeg')}
          name={'Full Name'}
        />
        <Text style={styles.EmailIdError}>{this.state.NameError}</Text>
        <TextInputComponent
          placeholder={'Eg:-1234@gmail.com'}
          onBlur={() => this.CheckEmail()}
          autoCapitalize="words"
          onChangeText={text => this.setState({EnteredEmail: text})}
          image={require('../AssetImage/msg.jpeg')}
          name={'Email'}
        />
        <Text style={styles.EmailIdError}>{this.state.emailError}</Text>
        <TextInputComponent
          placeholder="Enter Password!!"
          onBlur={() => this.passwordValidator()}
          secureTextEntry={this.state.secureTextEntry}
          style={styles.placeholder}
          onChangeText={text => this.setState({EnteredPassword: text})}
          image={require('../AssetImage/passwordeye.jpeg')}
          name="Create Password"
        />
        <TextInputComponent
          placeholder="Re-Enter Password"
          onChangeText={text => this.setState({ConfirmPassword: text})}
          name={'Confirm Password'}
        />
        <Text style={styles.EmailIdError}>{this.state.passwordError}</Text>

        <TextInputComponent name="Address" />
        <TextInputComponent
          placeholder="House No"
          onChangeText={text => this.setState({HouseNo: text})}
        />
        <TextInputComponent
          placeholder="Street Name"
          onChangeText={text => this.setState({StreetName: text})}
        />
        <TextInputComponent
          placeholder="Area/Locality (Optional)"
          onChangeText={text => this.setState({Area: text})}
        />
        <TextInputComponent
          placeholder="City"
          onChangeText={text => this.setState({City: text})}
        />
        <TextInputComponent
          placeholder="State"
          onChangeText={text => this.setState({State: text})}
        />
        <TextInputComponent
          keyboardType="number-pad"
          onChangeText={text => this.setState({MobileNumber: text})}
          placeholder="Mobile Number"
        />
        <Modal
          visible={this.state.show}
          animationType={'slide'}
          transparent={false}>
          <View style={styles.ParentView}>
            <View style={styles.ChildView}>
              <Text style={{fontSize: 15}}>
                Password: {this.state.password}
              </Text>
              <Text style={{fontSize: 15}}>
                FullName: {this.state.FullName}{' '}
              </Text>
              <Text style={{fontSize: 15}}>HouseNo: {this.state.HouseNo}</Text>
              <Text style={{fontSize: 15}}>
                StreetName: {this.state.StreetName}{' '}
              </Text>
              <Text style={{fontSize: 15}}>Area: {this.state.Area}</Text>
              <Text style={{fontSize: 15}}>City: {this.state.City}</Text>
              <Text style={{fontSize: 15}}>State: {this.state.State}</Text>
              <Text style={{fontSize: 15}}>
                {' '}
                MobileNumber: {this.state.MobileNumber}
              </Text>
              <Text style={{fontSize: 15}}>Email: {this.state.email}</Text>
              <Button
                title="Close Modal"
                onPress={() => {
                  this.setState({show: false});
                }}
              />
            </View>
          </View>
        </Modal>
        <Button title="Submit" onPress={this.FinalValidator} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  EmailIdError: {
    color: 'red',
    marginLeft: 20,
  },
  ParentView: {
    flex: 1,
  },
  ChildView: {
    backgroundColor: 'grey',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  WholeBackground: {
    backgroundColor: 'pink',
  },
});
export default LoginPage;
