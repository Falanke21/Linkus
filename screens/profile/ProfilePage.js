import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {Button, ListItem, Divider} from 'react-native-elements';
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
  static navigationOptions = {
    title: '我的',
    headerStyle: {
      backgroundColor: '#ffe066',
    },
  };

  pressLogin() {
    this.props.navigation.navigate('Login');
  }

  pressList(link){
    this.props.navigation.navigate(link);
  }

  render() {
    return (
      <View style={styles.profileBackground}>
        <View style={styles.profileSettingView}>
          <View style={{flex: 8}}></View>
          <TouchableOpacity 
            style={{flex: 1, backgroundColor: 'white'}}
            onPress={() => {
                this.props.navigation.navigate('Setting');
              }}
          >
            <FontAwesomeIcon icon={faCog} />
          </TouchableOpacity>
        </View>
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
            <Text style={{color:'gray'}}>My Name is Frank!</Text>
          </View>
        </View>

        <View style={styles.profileBottomSection}>
          
          <View style={{height:"85%", width:"100%"}}>
          <Divider/>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                onPress={()=> this.pressList(item.link)}
                //bottomDivider
                chevron
              />
            ))}
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
]
