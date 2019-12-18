import React from 'react';
import {Text, View, StatusBar} from 'react-native';

export default class HomePage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StatusBar
          backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}
        />
        <Text>Home page</Text>
      </View>
    );
  }
}
