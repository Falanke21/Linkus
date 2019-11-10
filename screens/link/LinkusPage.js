import React from "react";
import { Text, View } from "react-native";
import {SearchBar} from 'react-native-elements';
import PostingCard from './PostingCard';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

class LinkusPage extends React.Component {
  state = {
    search: ""
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;

    return (
      // <View>
      // <SearchBar
      //   placeholder="Type Here..."
      //   onChangeText={this.updateSearch}
      //   value={search}
      // />
      // <PostingCard />
      // </View>
      <Container>
        <Header><SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      /></Header>
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Click on any carditem
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default LinkusPage;
