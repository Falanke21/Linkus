import React from "react";
import { Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import PostingCard from "./PostingCard";
import SearchBar2 from "./SearchBar2.js";
import { Container, Header, Content, Button, Icon, Fab} from "native-base";

// Trying to solve the font issue:
// import { Font, AppLoading } from 'expo';

class LinkusPage extends React.Component {
  
  state = {
    search: "",
  };
  updateSearch = search => {
    this.setState({ search });
  };
  
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      /*
      //Trying to solve the font issue
      loading: true
      */
    };
  }
  /*
  // Trying to solve the font issue
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
*/
  render() {
    const { search } = this.state;
   /*
   //Trying to solve the font issue
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    */
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

        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            
            <Icon name="ios-arrow-up"/>
            <Button onPress={() => alert("Write Something (except you can't write currently :D)")} style={{ backgroundColor: '#3B5998' }}>
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
