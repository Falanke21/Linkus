import React, {useState} from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

export default class LoginPage extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: "",
  };

  passwordInputHandler(input){
    this.setState({passwordInput: input})
  }
  usernameInputHandler(input){
    this.setState({usernameInput:  input})
    console.log(this.state.usernameInput)
  }
  // const usernameInputHandler=(enteredText)=>{
  //   setUsernameInput(enteredText);
  // };
  // const passwordInputHandler=(enteredText)=>{
  //   setPasswordInput(enteredText);
  // };

  submitLoginHandler() {
    console.log(this.state.usernameInput);
    console.log(this.state.passwordInput);
  };



  render() {
    return (
      <View style={styles.loginBackground}>
        <View style={styles.iconSection}></View>
        <View style={styles.inputBar}>
          <View style={{flex:1}}></View>
          <View
            style={{
              flex: 2,
              alignItems: 'flex-end',
              justifyContent: 'center',
              /*borderWidth: 1*/
            }}>
            <TextInput
              placeholder="UT Email"
              textContentType="username"
              value={this.state.usernameInput}
              onChangeText={(username)=> this.usernameInputHandler(username)}
              style={{
                borderColor:"black",
                borderWidth:1,
                borderRadius:5,
                textAlign:'center',
                width: '100%'
              }}
              />
          </View>
          <View
            style={{
              flex: 2,
              alignItems: "flex-start",
              justifyContent: "center",
            }}>
            <Text> @mail.utoronto.ca</Text>

          </View>
          <View style={{flex:1}}></View>
        </View>
        <View style={styles.inputBar}>
          <TextInput
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(password)=> this.passwordInputHandler(password)}
            value={this.state.passwordInput}
            style={{
              borderColor:"black",
              borderWidth:1,
              borderRadius:5,
              textAlign:'center',
              width: '65%'
            }}

            />
        </View>
        <View style={{
            flex: 1,
            borderWidth: 0,
            borderColor: "black",
            justifyContent:'center',
            alignItems: 'center',
            flexDirection:'row'
          }}>
          <Button
            onPress={() => this.submitLoginHandler()}
            title="Login"
            />
          <Button
            onPress={() => this.props.navigation.navigate("Home")}
            title="Navigate"
            />
        </View>
        <View style={styles.iconSection}>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    flexDirection: "column"
  },
  iconSection: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(138, 193, 230)"
  },
  inputBar: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 0,
    borderColor: "black",
    justifyContent:'center',
    alignItems: 'center'
  }
});
