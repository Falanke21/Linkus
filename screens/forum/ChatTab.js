import React from "react";
import { Text, View } from "react-native";
import PostingCard from "./PostingCard";
import { Container, Header, Content } from "native-base";

class ChatTab extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <PostingCard />
          <PostingCard />
          <PostingCard />
        </Content>
      </Container>
      // <View
      //   style={{
      //     flex: 1,
      //     justifyContent: "center",
      //     alignItems: "center"
      //   }}
      // >
      //   <Text>这是聊天闲谈页</Text>
      // </View>
    );
  }
}

export default ChatTab;
