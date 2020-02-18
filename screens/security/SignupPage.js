import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, ListItem, Divider, Icon, Input} from 'react-native-elements';
import userData from '../Data/UserAccount.json';
import styles from './Styles';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: '注册',
  };
  state = {
    emailInput: '',
    passwordInput: '',
    confirmPasswordInput: '',
    passwordIsLegal: false,
    confirmIsCorrect: false,
  };

  emailInputHandler(input) {
    this.setState({emailInput: input});
  }

  passwordInputHandler(input) {
    this.setState({passwordInput: input});
    //this.checkPassword();
  }

  confirmInputHandler(input) {
    this.setState({confirmPasswordInput: input});
    //this.checkConfirm();
  }

  /*checkPassword() {
    if (this.state.passwordInput.length >= 5) {
      this.setState({passwordIsLegal: true});
      console.log('Legal PASSWORD!');
    } else {
      this.setState({passwordIsLegal: false});
      console.log('Illegal PASSWORD!');
    }
  }

  checkConfirm() {
    if (this.state.passwordInput == this.state.confirmPasswordInput) {
      this.setState({confirmIsCorrect: true});
      console.log('Correct!');
    } else {
      this.setState({confirmIsCorrect: false});
      console.log('NotCorrect');
    }
  }*/

  onPressSignupHandler() {
    console.log('submitted!');
    console.log('注册信息：');
    console.log('用户名：' + this.state.emailInput);
    console.log('密码：' + this.state.passwordInput);
  }

  render() {
    //const {goBack} = this.props.navigation;

    return (
      <View style={styles.background}>
        <View
          style={{
            height: '20%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: '#062958',
              fontWeight: 'bold',
              letterSpacing: 5,
            }}
          >
            Ready to Link?
          </Text>
        </View>
        <View style={styles.mainSection}>
          <View style={styles.signupFormInputSection}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
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
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  height: 20,
                  width: 130,
                  alignContent: 'flex-start',
                  fontSize: 17,
                }}
              />
              <Text style={{fontSize: 17}}> @mail.utoronto.ca</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                paddingTop: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextInput
                placeholder="输入密码"
                textContentType="password"
                value={this.state.passwordInput}
                onChangeText={password => this.passwordInputHandler(password)}
                maxLength={18}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                secureTextEntry={true}
                style={{
                  borderColor: '#062958',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  height: 20,
                  width: 250,
                  paddingRight: 15,
                  fontSize: 17,
                }}
              />
              {this.state.passwordInput.length >= 6 ? (
                <Icon name="done" color="green" />
              ) : (
                <Icon name="clear" color="red" />
              )}
            </View>
            <Text>（只可包含数字或字母，须多于6个字符）</Text>

            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                padding: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextInput
                placeholder="确认密码"
                textContentType="password"
                value={this.state.confirmPasswordInput}
                onChangeText={password => this.confirmInputHandler(password)}
                maxLength={18}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                secureTextEntry={true}
                style={{
                  borderColor: '#062958',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  height: 20,
                  width: 250,
                  paddingRight: 15,
                  fontSize: 17,
                }}
              />
              {this.state.passwordInput == this.state.confirmPasswordInput &&
              this.state.confirmPasswordInput.length >= 6 ? (
                <Icon name="done" color="green" />
              ) : (
                <Icon name="clear" color="red" />
              )}
            </View>
          </View>

          <View style={styles.loginButtonSection}>
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
        </View>
      </View>
    );
  }
}
