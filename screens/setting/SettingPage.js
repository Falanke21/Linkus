import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, ListItem, Divider, Icon} from 'react-native-elements';

export default class SettingPage extends React.Component {
  static navigationOptions = {
    title: '设置',
  };

  render() {
    return (
      <View>
        <View>
          {list1.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              //bottomDivider
              chevron
            />
          ))}
        </View>
        <View style={{height: '2%', backgroundColor: '#e5e5e5'}}></View>
        <View>
          {list2.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              //bottomDivider
              chevron
            />
          ))}
        </View>
        <View style={{height: '2%', backgroundColor: '#e5e5e5'}}></View>
        <View>
          {list3.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              //bottomDivider
              chevron
            />
          ))}
        </View>
        <View
          style={{
            padding: 30,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title="Login"
            type="outline"
            buttonStyle={{width: 300}}
          />
          {/*<TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>*/}
        </View>
      </View>
    );
  }
}

const list1 = [
  {
    title: '账号管理',
    icon: 'account-box',
  },
  {
    title: '安全设置',
    icon: 'security',
  },
  {
    title: '隐私设置',
    icon: 'fingerprint',
  },
];

const list2 = [
  {
    title: '消息提醒',
    icon: 'notifications-active',
  },
  {
    title: '主题',
    icon: 'texture',
  },
  {
    title: '清理缓存',
    icon: 'disc-full',
  },
];
const list3 = [
  {
    title: '举报',
    icon: 'flag',
  },
  {
    title: '反馈与帮助',
    icon: 'sentiment-very-satisfied',
  },
  {
    title: '关于Linkus',
    icon: 'all-inclusive',
  },
];
