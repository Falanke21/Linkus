import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, ListItem, Divider} from 'react-native-elements';

export default class MyLinkPage extends React.Component {
  static navigationOptions = {
    title: '我的Link',
  };

  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}
