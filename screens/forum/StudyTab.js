import React from "react";
import { Text, View } from "react-native";
import PostingCard from "./PostingCard";
import { Container, Header, Content } from "native-base";

class StudyTab extends React.Component {
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
      //   <Text>这是学术讨论页</Text>
      // </View>
    );
  }
}

export default StudyTab;
