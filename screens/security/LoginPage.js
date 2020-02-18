import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, ListItem, Divider, Icon} from 'react-native-elements';
import userData from '../Data/UserAccount.json';
import styles from './Styles';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: '登录',
  };

  state = {
    emailInput: '',
    passwordInput: '',
    correctEmail: 'ada',
    correctPassword: '666666',
    loginMessage: '',
  };

  emailInputHandler(input) {
    this.setState({emailInput: input});
  }

  passwordInputHandler(input) {
    this.setState({passwordInput: input});
  }

  onPressLoginHandler() {
    if (
      this.state.emailInput.toLowerCase() == this.state.correctEmail &&
      this.state.passwordInput == this.state.correctPassword
    ) {
      console.log('correct!');
      this.setState({loginMessage: 'Logging in'});
      this.props.navigation.navigate('Profile');
    } else {
      console.log('Incorrect');
      this.setState({loginMessage: 'Incorrect Email or Password!'});
    }
    console.log(this.state.emailInput);
    console.log(this.state.passwordInput);
  }

  onPressSignupHandler() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    //const {goBack} = this.props.navigation;

    return (
      <View style={styles.background}>
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

        <View style={styles.mainSection}>
          <View style={styles.inputBar}>
            <TextInput
              placeholder="UT Email"
              textContentType="username"
              value={this.state.emailInput}
              onChangeText={email => this.emailInputHandler(email)}
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
          <Text style={{color: '#C83266'}}>{this.state.loginMessage}</Text>

          <View style={styles.loginButtonSection}>
            <Button
              onPress={() => this.onPressLoginHandler()}
              title="登录"
              type="outline"
              containerStyle={{
                width: '85%',
                //alignItems: 'center',
                //justifyContent: 'center',
                paddingTop: 20,
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

            <Button
              onPress={() => this.onPressSignupHandler()}
              title="注册"
              type="outline"
              containerStyle={{
                width: '85%',
                //alignItems: 'center',
                //justifyContent: 'center',
                paddingTop: 20,
              }}
              buttonStyle={{
                width: '100%',
                height: 50,
                borderWidth: 2,
                borderRadius: 25,
                borderColor: '#062958',
                //alignItems: 'center',
                //justifyContent: 'center',
              }}
              titleStyle={{
                fontSize: 18,
                color: '#062958',
              }}
            />
          </View>
          <View style={styles.bottomSection}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
            >
              <Text style={{fontSize: 20}}>Cancel</Text>
            </TouchableOpacity>
            <Text> </Text>
            <Text> email: {this.state.correctEmail} </Text>
            <Text> password: {this.state.correctPassword} </Text>
          </View>
        </View>
      </View>
    );
  }
}
