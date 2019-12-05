import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {Button, ListItem, Divider, Icon} from 'react-native-elements';
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}
        >
          <FontAwesomeIcon icon={faCog} />
        </TouchableOpacity>
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
        {/*<TouchableOpacity
            style={{flex: 1, backgroundColor: 'white'}}
            onPress={() => {
              this.props.navigation.navigate('Setting');
            }}
          >
            <FontAwesomeIcon icon={faCog} />
          </TouchableOpacity>*/}
        <View style={{height: "3%"}}></View>
        <View style={styles.profileBasicInfoView}>
          <View style={styles.profileImageView}>
            <Image
              style={{width: 70, height: 70, borderRadius: 10}}
              source={{
                uri:
                  'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
              }}
            />
          </View>
          <View style={styles.profileNameView}>
            <Text style={styles.profileNameFont}>Frank Hua</Text>
            <Text style={{color: 'gray'}}>My Name is Frank!</Text>
          </View>
        </View>
        <View style={{height: "1%"}}></View>


        <View style={styles.profileBottomSection}>
          <View style={{height: '85%', width: '100%'}}>
            <Divider/>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={() => this.pressList(item.link)}
                containerStyle={{height: 50}}
                //bottomDivider
                chevron
              />
            ))}
            <Divider/>
          </View>
        </View>
      </View>
    );
  }
}

const list = [
  {
    title: '正在 Link',
    icon: 'rowing',
    link: 'MyLink',
  },
  {
    title: 'Link 历史',
    icon: 'pets',
    link: 'MyHistory',
  },
  {
    title: '个人资料',
    icon: 'perm-identity',
    link: 'MyInfo',
  },
  {
    title: 'Account Setting',
    icon: 'account-circle',
    link: 'AccountSetting',
  },
];
