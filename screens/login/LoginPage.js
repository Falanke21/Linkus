import React, {useState} from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

export default class LoginPage extends React.Component {

  state = {
    usernameInput: "",
    passwordInput: "",
    correctUsername: "ut",
    correctPassword: "666666",
    loginMessage: ""
  };

  passwordInputHandler(input){
    this.setState({passwordInput:input})
  }
  usernameInputHandler(input){
    this.setState({usernameInput:input})
  }

  submitLoginHandler() {
    if (this.state.usernameInput == this.state.correctUsername
        && this.state.passwordInput == this.state.correctPassword){
      console.log("correct!")
      this.setState({loginMessage: "Logging in"})
      this.props.navigation.navigate("Home")
    }else{
      console.log("Incorrect")
      this.setState({loginMessage: "Incorrect Username or Password!"})
    }
    console.log(this.state.usernameInput);
    console.log(this.state.passwordInput);
  };



  render() {
    return (
      <View style={styles.loginBackground}>
        <View style={styles.iconSection}></View>
        <View style={styles.inputBar}>
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
                width: '40%'
              }}
              />
            <Text> @mail.utoronto.ca</Text>
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
              width: '70%'
            }}
          />
        </View>
        <View style={{
            flex: 1,
            borderWidth: 0,
            borderColor: "black",
            justifyContent:'center',
            alignItems: 'center',
            flexDirection:'column'
          }}>
          <Button
            onPress={() => this.submitLoginHandler()}
            title="Login"
          />
          <Text>{this.state.loginMessage}</Text>
        </View>
        <View style={styles.iconSection}>
          <Text> username: ut </Text>
          <Text> password: 666666</Text>
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
    flex: 6,
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
