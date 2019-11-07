import React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";

class LoginPage extends React.Component {
  state = {
    isLoggedIn: false,
    isCorrectLogin: false,
    emailPrefix: "",
    password: "",
    message: ""
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
              style={{
                borderColor:"black",
                borderWidth:1,
                borderRadius:5,
                textAlign:'center',
                width: 120
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
            style={{
              borderColor:"black",
              borderWidth:1,
              borderRadius:5,
              textAlign:'center'
              }}

          />
        </View>
        <View style={{
                flex: 1,
                borderWidth: 0,
                borderColor: "black",
                justifyContent:'center',
                alignItems: 'center'
        }}>
          <Button
            onPress={() => this.props.navigation.navigate("Home")}
            title="Login"
          />
        </View>
        <View style={styles.iconSection}>
          <Text> 怎么固定textInput的长度？ </Text>
        </View>
      </View>
    );
  }
}

export default LoginPage;

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
