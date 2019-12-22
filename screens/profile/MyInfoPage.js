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
import {Button, List, ListItem, Divider, Avatar} from 'react-native-elements';
import theme from '../Data/Theme.json';
import user from './UserProfile.json';

export default class MyLinkPage extends React.Component {
  static navigationOptions = {
    title: '个人资料',
  };

  state = {
    avatar: '',
    username: user.username,
    UTemail: '',
    campus: '',
    courses: '',
    description: '',
    contactType: [],
    contactInfo: [],
  };

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
          {BasicInfo.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              titleStyle={{fontSize: 16}}
              rightTitle={item.content}
              onPress={() => this.pressList(item.type)}
              containerStyle={{height: 50}}
              bottomDivider
              chevron
            />
          ))}
        </View>
        <View style={{width: '100%'}}>
          <Text style={{fontSize: 16, padding: 15, fontWeight: 'bold'}}>联系方式</Text>
          <Divider />
          {user.contact.map((item, i) => (
            <ListItem
              key={i}
              title={item[0]}
              titleStyle={{fontSize: 16}}
              rightTitle={item[1]}
              onPress={() => this.pressList('contact')}
              containerStyle={{height: 50}}
              bottomDivider
              chevron
            />
          ))}
        </View>
      </ScrollView>
    );
  }

  pressList(type) {
    if (type == 'campus') {
      this.setState({campus: 'UTSG'});
      console.log(this.state.campus);
    } else {
      alert('asd');
    }
  }
}

const BasicInfo = [
  {
    title: '用户名',
    content: user.username,
    type: 'username',
  },
  {
    title: 'UT email',
    content: '',
    type: 'UTemail',
  },
  {
    title: '校区',
    content: user.campus,
    type: 'campus',
  },
  {
    title: '课程',
    content: '',
    type: 'courses',
  },
  {
    title: '签名',
    content: '',
    type: 'description',
  },
];
