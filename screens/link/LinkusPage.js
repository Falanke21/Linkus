import React from "react";
import { Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import PostingCard from "./PostingCard";
import SearchBar2 from "./SearchBar2.js"
import { Container, Header, Content } from "native-base";

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
        {/* <Header>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
        </Header>  */}
        <Header>
          <SearchBar2 />
        </Header>
        
       
        <Content padder>
          <PostingCard />
          <PostingCard />
          <PostingCard />
        </Content>
      </Container>
    );
  }
}

export default LinkusPage;
