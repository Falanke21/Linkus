import React from "react";
import { Text, View, Button, Modal } from "react-native";
import { SearchBar } from "react-native-elements";
import PostingCard from "./PostingCard";
import PublishFormPage from "./PublishFormPage";
import SearchBar2 from "./SearchBar2.js"
import { Container, Header, Content } from "native-base";

class LinkusPage extends React.Component {
  state = {
    search: "",
    modalVisible:false
  };

  constructor(props) {
    super(props)
  }

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
          <Button title="post"
          onPress={() => this.setState({modalVisible:true})}>
            <Text>post</Text>
          </Button>
        </Header>
        
        <Modal
          animationType="none"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({modalVisible:false})}
        >
          <PublishFormPage />
          <Button
            onPress={() => this.setState({modalVisible:false})}
            title="取消"
            />
        </Modal>
       
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
