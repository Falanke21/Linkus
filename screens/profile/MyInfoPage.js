import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Button,
  List,
  ListItem,
  Divider,
  Avatar,
  Overlay,
} from 'react-native-elements';
import theme from '../Data/Theme.json';
import user from '../Data/UserProfile.json';
import {ThemeColors} from 'react-navigation';
import EditInfoOverlay from './EditInfoOverlay.js';

export default class MyLinkPage extends React.Component {
  static navigationOptions = {
    title: '个人资料',
  };

  state = {
    //avatar: '',
    //username: '',
    //UTemail: '',
    //campus: '',
    //courses: '',
    //description: '',
    //contact: [],

    isVisible: false,
    changingType: 'DNE',
    changingTitle: 'DNE',
    changingContent: 'DNE',
    basicInfo: {
      username: {
        title: '用户名',
        content: user.username,
        type: 'username',
        canModify: true,
      },
      utmail: {
        title: 'UT邮箱',
        content: user.utmail,
        type: 'utmail',
        canModify: false,
      },
      campus: {
        title: '校区',
        content: user.campus,
        type: 'campus',
        canModify: false,
      },
      courses: {
        title: '课程',
        content: user.courses,
        type: 'courses',
        canModify: true,
        selection_type: 'select',
      },
      description: {
        title: '签名',
        content: user.description,
        type: 'description',
        canModify: true,
        selection_type: 'text',
      },
    },
    contacts: user.contacts,
  };

  componentDidMount() {
    console.log(this.state.basicInfo.username);
    console.log(this.state.contacts);
  }

  componentWillUnmount() {
    this.state = {isVisible: false};
    console.log('will unmount');
  }

  pressList(item) {
    console.log('over lay show');
    this.setState({
      isVisible: item.canModify,
      changingType: item.type,
      changingTitle: item.title,
      changingContent: item.content,
    });
  }

  TextInputHandler(content) {
    this.setState({changingContent: content});
    console.log(this.state.changingContent);
  }

  pressSubmit() {
    console.log(this.state.changingTitle);
    console.log(this.state.changingType);
    console.log(this.state.changingContent);

    let _type = this.state.changingType;

    this.state.basicInfo[_type].content = this.state.changingContent;

    console.log('finish modify');
    console.log(
      this.state.basicInfo[_type].title +
        ': ' +
        this.state.basicInfo[_type].content
    );
    this.setState({isVisible: false});
  }

  showOverlay(item) {
    console.log('trying to show');
    //modify_part = <View></View>;
    console.log(item);
    if (item) {
      if (item.selection_type == 'select') {
        //modify_part to scroll
      } else {
        modify_part = (
          <TextInput
            onChangeText={content => this.TextInputHandler(content)}
            value={this.state.changingContent}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="go"
            style={{
              borderColor: '#062958',
              borderWidth: 2,
              borderRadius: 25,
              textAlign: 'center',
              height: 50,
              width: '90%',
              alignContent: 'flex-start',
              fontSize: 18,
            }}
          />
        );
      }
    }

    return (
      <Overlay
        isVisible={this.state.isVisible}
        overlayBackgroundColor="white"
        windowBackgroundColor="none"
        onBackdropPress={() => this.setState({isVisible: false})}
        width="80%"
        height="40%"
      >
        <Text style={{alignSelf: 'center', fontSize: 20, padding: 15}}>
          {this.state.changingTitle}
        </Text>
        <View
          style={{
            height: '50%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {modify_part}
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '30%',
            flexDirection: 'row',
          }}
        >
          <Button
            title="取消"
            buttonStyle={{paddingVertical: 20, paddingHorizontal: 40}}
            type="clear"
            onPress={() => this.setState({isVisible: false})}
          />
          <Button
            title="修改"
            buttonStyle={{paddingVertical: 20, paddingHorizontal: 40}}
            type="clear"
            onPress={() => this.pressSubmit()} //(this.state.changingContent)}
          />
        </View>
      </Overlay>
    );
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 130}}
        >
          <Avatar
            source={{
              uri: user.avatar,
            }}
            avatarStyle={{width: 90, height: 90}}
            containerStyle={{width: 90, height: 90}}
            rounded
            xlarge
            showEditButton
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{fontSize: 16, padding: 15, fontWeight: 'bold'}}>
            基本信息
          </Text>
          <Divider />
          {Object.keys(this.state.basicInfo).map((item, i) => (
            <View style={{backgroundColor: 'black'}}>
              {this.showOverlay(this.state.basicInfo[item])}
              <ListItem
                key={i}
                title={this.state.basicInfo[item].title}
                titleStyle={{fontSize: 16}}
                rightTitle={this.state.basicInfo[item].content}
                onPress={() => {
                  this.pressList(this.state.basicInfo[item]);
                }}
                containerStyle={{height: 50}}
                //bottomDivider
                chevron
              />
            </View>
          ))}
        </View>
        <View style={{width: '100%', color: '#FF1'}}>
          <Text style={{fontSize: 16, padding: 15, fontWeight: 'bold'}}>
            联系方式
          </Text>
          <Divider />
          {Object.keys(this.state.contacts).map((item, i) => (
            <ListItem
              key={i}
              title={item}
              titleStyle={{fontSize: 16}}
              rightTitle={this.state.contacts[item]}
              // rightTitleNumberOfLines={1}
              onPress={() =>
                this.pressList('联系', item, this.state.contacts[item])
              }
              containerStyle={{height: 50}}
              //bottomDivider
              chevron
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

let BasicInfo = [
  {
    title: '用户名',
    content: user.username,
    type: 'username',
    username: user.username,
  },
  {
    title: 'UT邮箱',
    content: '',
    type: 'utmail',
  },
  {
    title: '校区',
    content: user.campus,
    type: 'campus',
  },
  {
    title: '课程',
    content: user.courses,
    type: 'courses',
  },
  {
    title: '签名',
    content: user.description,
    type: 'description',
  },
];
