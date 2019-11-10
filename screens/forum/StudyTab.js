import React from "react";
import { Text, View } from "react-native";

class StudyTab extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>这是学术讨论页</Text>
      </View>
    );
  }
}

export default StudyTab;
