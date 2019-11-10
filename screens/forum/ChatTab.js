import React from "react";
import { Text, View } from "react-native";

class ChatTab extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>这是聊天闲谈页</Text>
      </View>
    );
  }
}

export default ChatTab;
