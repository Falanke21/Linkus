import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, ListItem, Divider} from 'react-native-elements';

export default class SettingPage extends React.Component {
  render() {
    return (
      <View>
        <View>
          {list1.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              bottomDivider
              chevron
            />
          ))}
        </View>
        <View style={{height:"10%"}}></View>
        <Divider/>
        <View>
          {list2.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              bottomDivider
              chevron
            />
          ))}
        </View>
        <View
            style={{padding: 30, width:"100%", alignItems: 'center', justifyContent: 'center'}}
          >
            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              title="Login"
              type="outline"
              buttonStyle={{width: 300}}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const list1 = [
  {
    title: '账号管理',
    icon: 'rowing',
  },
  {
    title: '隐私设置',
    icon: 'pets',
  },
  {
    title: '账号安全',
    icon: 'perm-identity',
  },
  {
    title: '消息提醒',
    icon: 'account-circle',
  },
];

const list2 = [
  {
    title: '语言',
    icon: 'rowing',
  },
  {
    title: '清理缓存',
    icon: 'pets',
  },
];
