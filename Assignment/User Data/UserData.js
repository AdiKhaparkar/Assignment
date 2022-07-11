import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Button,TouchableOpacity,Modal } from 'react-native';
import TextInputComponent from './TextInput';
import Heading from './HeaderComponent';
import ImageScreen from './ImageScreen';


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        secureTextEntry: true,
        FullName:"Aditya Khaparkar",
        email:"Aditya123@gmail.com",
        password:"Aditya123",
        NameError:"",
        emailError:"",
        EnteredEmail: "",
        EnteredPassword: "",
        passwordError:"",
        show:false,
        HouseNo:"",
        StreetName:"",
        Area:"",
        City:"",
        State:"",
        MobileNumber:"",

      };
  }
  FullName = () => {
    if ( this.state.FullName  == this.state.EnteredName){
      this.setState({NameError:" Entered Name Matched with the record"})
    }else{this.setState({NameError:"Please enter a Valid Email"})
  }
}
CheckEmail=()=>{
    if ( this.state.EnteredEmail == this.state.email ) {
      this.setState({emailError:" Valid Email ok "})
    }else{this.setState({emailError:"Please enter a Valid Email"})
  }
}
passwordValidator = () =>{
    if(this.state.EnteredPassword == this.state.password) {
      this.setState({passwordError:"Password matched successfully"})
    }else{
      this.setState({passwordError:"Please enter a Valid Password"})
    }
}
secureTextEntry = () => {
    this.state.secureTextEntry ? this.setState({secureTextEntry: false}) : this.setState({secureTextEntry: true})
}
RepeatPassword=()=>{
    this.state.password== this.state.EnteredPassword
    ? alert("Password Matched")
    : alert("Entered Password Does not matched ")
}
FinalValidator= ()=>{
    if (this.state.EnteredEmail == this.state.email  && this.state.EnteredPassword == this.state.password ){
      this.setState({show:true});
  }
  else{
    alert("check the credentials")
}}
  render() {
    return (
      <View>
        {/*--------Full Name----------*/}
        <View>
            <Heading name={"Full Name"} style={styles.HeadingStyle}/>
            <View style={styles.placeholder}>
                <ImageScreen style={styles.iconpass} Name={require("../AssetImage/User.jpeg")} />
        <TextInputComponent
            placeholder={"First and Last Name"}
            onBlur={() => this.FullName()}
            autoCapitalize="words"
            onChangeText={(text)=> this.setState({EnteredName: text})}
        />
            </View>
        </View>
        <Text style={styles.EmailIdError}>{this.state.NameError}</Text>

        {/* --------Email Section---------- */}
        <View>
            <Heading name={"Email"} style={styles.HeadingStyle}/> 
            <View style={styles.placeholder}>
                <ImageScreen style={styles.iconpass} Name={require("../AssetImage/msg.jpeg")} />
        <TextInputComponent
            placeholder={"Eg:-1234@gmail.com"}
            onBlur={() => this.CheckEmail()}
            autoCapitalize="words"
            onChangeText={(text)=> this.setState({EnteredEmail: text})}
        />
        </View>
        </View>
        <Text style={styles.EmailIdError}>{this.state.emailError}</Text>

        {/* ---------Create Password--------- */}
        <Heading name={"Create Password"} style={styles.HeadingStyle}/>
        <View style={{flexDirection: 'row'}}>
        <View style={styles.placeholder}>
        <TextInputComponent
            placeholder="Enter Password"
            onBlur={() => this.passwordValidator()}
            secureTextEntry={this.state.secureTextEntry}
            style={styles.placeholderpass}
            onChangeText={(text)=> this.setState({EnteredPassword: text})} />
        <TouchableOpacity  onPress={()=>this.secureTextEntry()} activeOpacity={0.5}>
            <ImageScreen style={styles.iconpass} Name={require("../AssetImage/passwordeye.jpeg")} />
        </TouchableOpacity>
        </View>
        </View>


        {/* ---------Confirm Password--------- */}
        <Heading name={"Confirm Password"} style={styles.HeadingStyle} />
        <View style={styles.placeholder}>
            <TextInputComponent
            placeholder="Re-Enter Password"
            style={styles.placeholderpass}
            onChangeText={(text)=> this.setState({EnteredPassword: text})}
        />
        </View>
        
        <Heading  name={"Address"} style={styles.HeadingStyle}/>
        <TextInputComponent placeholder="House No" onChangeText={(text)=> this.setState({HouseNo: text})}  style={styles.placeholderAddress} />
        <TextInputComponent placeholder="Street Name" onChangeText={(text)=> this.setState({StreetName: text})}  style={styles.placeholderAddress} />
        <TextInputComponent placeholder="Area/Locality (Optional)" onChangeText={(text)=> this.setState({Area: text})}  style={styles.placeholderAddress} />
        <TextInputComponent placeholder="City" onChangeText={(text)=> this.setState({City: text})}  style={styles.placeholderAddress} />
        <TextInputComponent placeholder="State" onChangeText={(text)=> this.setState({State: text})}  style={styles.placeholderAddress} />
        <TextInput keyboardType='number-pad' onChangeText={(text)=> this.setState({MobileNumber: text})} placeholder="Mobile Number" />

        <Modal visible={this.state.show} animationType = {"slide"} transparent = {false}>
        <View style={styles.ParentView}>
              <View style={styles.ChildView}>
              <Text style={{fontSize:15}}>Email: {this.state.email}</Text>
              <Text style={{fontSize:15}}>Password: {this.state.password}</Text>
              <Text style={{fontSize:15}}>FullName: {this.state.FullName}</Text>
              <Text style={{fontSize:15}}>HouseNo: {this.state.HouseNo}</Text>
              <Text style={{fontSize:15}}>StreetName: {this.state.StreetName}</Text>
              <Text style={{fontSize:15}}>Area: {this.state.Area}</Text>
              <Text style={{fontSize:15}}>City: {this.state.City}</Text>
              <Text style={{fontSize:15}}>State: {this.state.State}</Text>
              <Text style={{fontSize:15}}>MobileNumber: {this.state.MobileNumber}</Text>
              <Button title="Close Modal"onPress={()=>{this.setState({show:false})}} />
              
              </View>
          </View>
        </Modal>
        <Button title="Submit" onPress={this.FinalValidator} />
        

      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
    placeholder: {
        width:400,
        height: 40,
        alignContent: 'center',
        borderBottomColor:"blue",
        borderLeftColor:"white",
        borderRightColor:"white",
        borderTopColor:"white",
        borderWidth:1,
        flexDirection:'row',
        borderWidth:2
      },
      EmailIdError:{
        color: 'red',
        marginLeft: 20
      },
      iconpass: {
        height: 13,
        width: 20,
        marginTop:15,
        paddingLeft:10
      },
      placeholderpass: {
        borderBottomColor:"blue",
        borderLeftColor:"white",
        borderRightColor:"white",
        borderTopColor:"white",
        width: 360,
        height: 35,
        paddingLeft: 10,
        
      },
      placeholderAddress:{
        width:400,
        height: 40,
        alignContent: 'center',
        borderBottomColor:"blue",
        borderLeftColor:"white",
        borderRightColor:"white",
        borderTopColor:"white",
        borderWidth:1
      },
      ParentView:{
        flex:1
      },
      ChildView:{
        backgroundColor:"grey",
        margin:50,
        padding:40,
        borderRadius:10,
        flex:1
    },
    HeadingStyle:{
      fontSize:20,
      color:"violet",
      
    }

})
export default LoginPage;