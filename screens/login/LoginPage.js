import React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";


class LoginPage extends React.Component {

    state = {
      isLoggedIn: false,
      isCorrectLogin: false,
      emailPrefix: '',
      password: '',
      message: ''
    }

    render() {
        return (
            <View style={styles.loginBackground}>
              <View style={styles.iconSection}>
                /* There should be an icon image*/
              </View>
              <View style={styles.inputBar}>
                <View style={{flex:2}}>
                 <TextInput placeholder='Email' />
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-start'}}>
                  <Text>@mail.utoronto.ca</Text>
                </View>

              </View>
              <View>
                 <TextInput placeholder='Password' />
              </View>
              <View>
                /* Button */
                <Button
                  onPress={() =>
                    this.props.navigation.navigate("Home")
                  }
                  title="Login"
                />

              </View>
              <View styles={{flex:2}}>
              </View>
            </View>
        );
    }
}

export default LoginPage;



const styles = StyleSheet.create({
  loginBackground:{
    flex: 1,
    flexDirection: 'column',

  },
  iconSection:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  inputBar: {
    flex: 1,
    flexDirection: 'row'
  },

});
