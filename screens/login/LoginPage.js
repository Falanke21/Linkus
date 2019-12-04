import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class LoginPage extends React.Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    correctUsername: 'ada',
    correctPassword: '666666',
    loginMessage: '',
  };

  passwordInputHandler(input) {
    this.setState({passwordInput: input});
  }
  usernameInputHandler(input) {
    this.setState({usernameInput: input});
  }

  submitLoginHandler() {
    if (
      this.state.usernameInput.toLowerCase() == this.state.correctUsername &&
      this.state.passwordInput == this.state.correctPassword
    ) {
      console.log('correct!');
      this.setState({loginMessage: 'Logging in'});
      this.props.navigation.navigate('Home');
    } else {
      console.log('Incorrect');
      this.setState({loginMessage: 'Incorrect Username or Password!'});
    }
    console.log(this.state.usernameInput);
    console.log(this.state.passwordInput);
  }

  render() {
    const {goBack} = this.props.navigation;

    return (
      <View style={styles.loginBackground}>
        <View style={styles.iconSection}></View>
        <View
          style={{flex: 6, alignItems: 'center', justifyContent: 'flex-start'}}
        >
          <View style={styles.inputBar}>
            <TextInput
              placeholder="UT Email"
              textContentType="username"
              value={this.state.usernameInput}
              onChangeText={username => this.usernameInputHandler(username)}
              style={{
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 15,
                textAlign: 'center',
                width: '40%',
                alignContent: 'flex-start',
              }}
            />
            <Text> @mail.utoronto.ca</Text>
          </View>
          <View style={styles.inputBar}>
            <TextInput
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={password => this.passwordInputHandler(password)}
              value={this.state.passwordInput}
              style={{
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 15,
                textAlign: 'center',
                width: '70%',
              }}
            />
          </View>
          <View
            style={{
              height:'20%',
              borderWidth: 0,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <TouchableOpacity>
              <Text style={{color: 'blue'}}>Forgot your password?</Text>
            </TouchableOpacity>
            <Text>{this.state.loginMessage}</Text>
            <Button
              onPress={() => this.submitLoginHandler()}
              title="Login"
              style={{
                padding: 10,
              }}
            />
            <Text> username: {this.state.correctUsername} </Text>
            <Text> password: {this.state.correctPassword} </Text>
          </View>
          <View style={{height:"40%", alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => goBack()}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginBackground: {
    flex: 1,
    flexDirection: 'column',
  },
  iconSection: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(138, 193, 230)',
  },
  inputBar: {
    flexDirection: 'row',
    borderWidth: 0,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
