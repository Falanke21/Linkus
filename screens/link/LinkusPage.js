import React from "react";
import { Text, View, Button, Modal } from "react-native";
import { SearchBar } from "react-native-elements";
import PostingCard from "./PostingCard";
import PublishFormPage from "./PublishFormPage";
import SearchBar2 from "./SearchBar2.js";
import { Container, Header, Content, Icon, Fab} from "native-base";



class LinkusPage extends React.Component {
  
  state = {
    search: "",
    modalVisible:false
  };

  updateSearch = search => {
    this.setState({ search });
  };
  
  constructor(props) {
    super(props)
    this.state = {
      active: false,
     
    };
  }
 
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
        
        <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => this.setState({ active: !this.state.active })}>
        
        <Icon name="ios-arrow-up"/>
        <Button onPress={() => this.setState({modalVisible:true})} style={{ backgroundColor: '#3B5998' }}>
          <Icon name="add" />
        </Button>
        <Button onPress={() => alert("Choose a post to activate (except you can't choose currently :D)")} style={{ backgroundColor: '#DD5144' }}>
        <Icon name="ios-flame" />
        </Button>
      </Fab>
        

      </Container>
    );
  }
}

export default LinkusPage;
