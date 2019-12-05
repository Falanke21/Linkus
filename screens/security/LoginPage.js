import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, ListItem, Divider, Icon} from 'react-native-elements';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: '登录',
  };

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
      this.props.navigation.navigate('Profile');
    } else {
      console.log('Incorrect');
      this.setState({loginMessage: 'Incorrect Username or Password!'});
    }
    console.log(this.state.usernameInput);
    console.log(this.state.passwordInput);
  }

  render() {
    //const {goBack} = this.props.navigation;

    return (
      <View style={styles.loginBackground}>
        <View style={styles.iconSection}>
          <Text
            style={{
              fontSize: 50,
              color: '#062958',
              fontWeight: 'bold',
              letterSpacing: 5,
            }}
          >
            LinkUs
          </Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'flex-start'}}>
          <View style={styles.inputBar}>
            <TextInput
              placeholder="UT Email"
              textContentType="username"
              value={this.state.usernameInput}
              onChangeText={username => this.usernameInputHandler(username)}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              style={{
                borderColor: '#062958',
                borderWidth: 2,
                borderRadius: 25,
                textAlign: 'center',
                height: 50,
                width: '40%',
                alignContent: 'flex-start',
                fontSize: 18,
              }}
            />
            <View style={{width: '50%'}}>
              <Text style={{fontSize: 18}}> @mail.utoronto.ca</Text>
            </View>
          </View>
          <View style={styles.inputBar}>
            <TextInput
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              onChangeText={password => this.passwordInputHandler(password)}
              value={this.state.passwordInput}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="go"
              style={{
                borderColor: '#062958',
                borderWidth: 2,
                borderRadius: 25,
                textAlign: 'center',
                height: 50,
                width: '90%',
                alignContent: 'flex-start',
                fontSize: 18,
              }}
            />
          </View>
          <TouchableOpacity>
            <Text style={{color: 'blue'}}>Forgot your password?</Text>
          </TouchableOpacity>
          <Text>{this.state.loginMessage}</Text>
          <View
            style={{
              height: '20%',
              width: '100%',
              borderWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Button
              onPress={() => this.submitLoginHandler()}
              title="Login"
              type="outline"
              containerStyle={{
                width: '85%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              buttonStyle={{
                width: '100%',
                height: 50,
                borderWidth: 2,
                borderRadius: 25,
                borderColor: '#062958',
              }}
              titleStyle={{
                fontSize: 18,
                color: '#062958',
              }}
            />
          </View>
          <View
            style={{
              height: '30%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Text style={{fontSize: 20}}>Cancel</Text>
            </TouchableOpacity>
            <Text> </Text>
            <Text> username: {this.state.correctUsername} </Text>
            <Text> password: {this.state.correctPassword} </Text>
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
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputBar: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
