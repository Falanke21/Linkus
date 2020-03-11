import React, { Fragment } from 'react';
import {Text, View, Modal} from 'react-native';
import {SearchBar} from 'react-native-elements';
import PostingCard from './PostingCard';
import PublishFormPage from './PublishFormPage';
import SearchBar2 from './SearchBar2.js';
import theme from '../Data/Theme.json';
import Overlay from "react-native-modal-overlay";
import ActivationPostingCard from './ActivationPostingCard';
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
import { ScrollView } from 'react-native-gesture-handler';

export default class LinkusPage extends React.Component {
  static navigationOptions = {
    title: 'Link',
    //header: null,
  };

  state = {
    search: '',
    modalVisible: false,
    modal2Visible: false
  };

  updateSearch(search) {
    this.setState({search});
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      modalVisible: false,
      modal2Visible: false
    };
  }

  onClose = () => this.setState({ modal2Visible: false});
  onOpen = () => this.setState({ modal2Visible: true });


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
              this.onOpen()
            }
            style={{backgroundColor: '#DD5144'}}
          >
            <Icon name="ios-flame" />
          </Button>
        </Fab>

        <Overlay
          visible={this.state.modal2Visible}
          onClose={this.onClose}
          closeOnTouchOutside
          animationType="zoomIn"
          containerStyle={{ backgroundColor: "rgba(37, 8, 10, 0.78)" }}
          childrenWrapperStyle={{ backgroundColor: "#eee" }}
          animationDuration={500}
        >
          {(hideModal, overlayState) => (
            <Fragment>
            <Text>我发布的</Text>
              <ScrollView>
                <ActivationPostingCard/>
                <ActivationPostingCard/>
                <ActivationPostingCard/>
                <ActivationPostingCard/>
                <ActivationPostingCard/>
                <ActivationPostingCard/>
                <ActivationPostingCard/>
              </ScrollView>

              <Icon name="ios-close-circle" onPress={hideModal} style = {{color: '#DD5144', borderRadius: 100, position: "absolute", top: 2, right: 2}}/>
            </Fragment>
          )}
        </Overlay>        
      </Container>
    );
  }
}
