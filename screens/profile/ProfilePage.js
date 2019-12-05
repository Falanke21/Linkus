import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {Button, ListItem, Divider, Icon, Avatar} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faShieldAlt,
  faCog,
  faBars,
  faPaw,
  faUser,
  faHandPeace,
} from '@fortawesome/free-solid-svg-icons';

export default class ProfilePage extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '我',
      headerRight: () => (
        <View style={{width: 35}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}
          >
            <FontAwesomeIcon icon={faCog} size={20} />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  pressLogin() {
    this.props.navigation.navigate('Login');
  }

  pressList(link) {
    this.props.navigation.navigate(link);
  }

  render() {
    return (
      <View style={styles.profileBackground}>
        <View style={{height: '3%'}}></View>
        <View style={styles.profileBasicInfoView}>
          <View style={styles.profileImageView}>
            <Avatar
              source={{
                uri:
                  'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
              }}
              avatarStyle={{width: 70, height: 70}}
              containerStyle={{width: 70, height: 70}}
              rounded
            />
            {/*<Image
              style={{width: 70, height: 70, borderRadius: 10}}
              source={{
                uri:
                  'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
              }}
            />*/}
          </View>
          <View style={styles.profileNameView}>
            <Text style={styles.profileNameFont}>大橙吱</Text>
            <Text style={{color: 'gray'}}>My Name is Frank!</Text>
          </View>
        </View>
        <View style={{height: '1%'}}></View>

        <View style={styles.profileBottomSection}>
          <View style={{height: '85%', width: '100%'}}>
            <Divider />
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                titleStyle={{fontSize:16}}
                leftIcon={{name: item.icon, color: '#000000'}}
                onPress={() => this.pressList(item.link)}
                containerStyle={{height: 50}}
                //bottomDivider
                chevron
              />
            ))}
            <Divider />
          </View>
        </View>
      </View>
    );
  }
}

const list = [
  {
    // icon use material
    title: '我的Link',
    icon: 'all-inclusive',
    link: 'MyLink',
  },
  {
    title: '消息通知',
    icon: 'notifications',
    link: 'Notification',
  },
  {
    title: 'Link历史',
    icon: 'pets',
    link: 'MyHistory',
  },
  {
    title: '个人资料',
    icon: 'face',
    link: 'MyInfo',
  },
];
