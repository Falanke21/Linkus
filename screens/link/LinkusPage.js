import React from 'react';
import {Text, View, Modal} from 'react-native';
import {SearchBar} from 'react-native-elements';
import PostingCard from './PostingCard';
import PublishFormPage from './PublishFormPage';
import SearchBar2 from './SearchBar2.js';
import theme from '../Data/Theme.json';
import {
  Container,
  Header,
  Content,
  Icon,
  Fab,
  Item,
  Input,
  Button,
} from 'native-base';

export default class LinkusPage extends React.Component {
  static navigationOptions = {
    title: 'Link',
    //header: null,
  };

  state = {
    search: '',
    modalVisible: false,
  };

  updateSearch(search) {
    this.setState({search});
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      modalVisible: false,
    };
  }

  render() {
    const {search} = this.state;

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
        {/*<Header style={{backgroundColor: "#FFFFFF"}}>
          <SearchBar2 />
          {/*<Button
            title="post"
            onPress={() => this.setState({modalVisible: true})}
          >
            <Text>post</Text>
          </Button>
        </Header>*/}

        <SearchBar
          lightTheme
          round
          placeholder="搜索"
          value={this.state.search}
          onChangeText={search => this.updateSearch(search)}
          containerStyle={{backgroundColor: '#FFFFFF', borderColor: '#FFFFFF'}}
        />

        {/*<Header
          searchBar
          rounded
          style={{
            backgroundColor: '#FFF',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>*/}

        <Modal
          animationType="none"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({modalVisible: false})}
        >
          <PublishFormPage />
          <Button
            onPress={() => this.setState({modalVisible: false})}
            title="取消"
          />
        </Modal>

        <Content padder>
          <PostingCard />
          <PostingCard />
          <PostingCard />
          <PostingCard />
          <PostingCard />
          <PostingCard />
          <PostingCard />
        </Content>

        <Fab
          //active={this.state.active}
          active={true}
          direction="up"
          containerStyle={{}}
          //style={{backgroundColor: '#5067FF'}}
          style={{backgroundColor: '#062958'}}
          position="bottomRight"
          //onPress={() => this.setState({active: !this.state.active})}
          onPress={() => this.setState({modalVisible: true})}
        >
          <Icon name="add" />

          <Button
            onPress={() =>
              alert(
                "Choose a post to activate (except you can't choose currently :D)"
              )
            }
            style={{backgroundColor: '#DD5144'}}
          >
            <Icon name="ios-flame" />
          </Button>
        </Fab>
      </Container>
    );
  }
}
