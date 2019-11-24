import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {Button, ListItem} from 'react-native-elements';
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
  state = {
    pageTitle:"",
  }

  pressLogin() {
    this.props.navigation.navigate('Login');
  }

  pressList(title){
    console.log(title)
    
    this.props.navigation.navigate('Login');
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
              style={{width: 80, height: 80, borderRadius: 40}}
              source={{
                uri:
                  'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
              }}
            />
          </View>
          <View style={styles.profileNameView}>
            <Text style={styles.profileNameFont}>MyName</Text>
          </View>
        </View>

        <View style={styles.profileBottomSection}>
        
          <View style={{height:"85%", width:"100%"}}>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                onPress={()=> this.pressList(item.title)}
                bottomDivider
                chevron
              />
            ))}
          </View>

          <View
            style={{flex: 8, alignItems: 'center', justifyContent: 'center'}}
          >
            <Button
              onPress={() => this.pressLogin()}
              title="Login"
              type="outline"
            />
          </View>
        </View>
      </View>
    );
  }
}


const list = [
  {
    title: 'My Link',
    icon: 'rowing',
  },
  {
    title: 'My History',
    icon: 'pets',
  },
  {
    title: 'My Info',
    icon: 'perm-identity',
  },
  {
    title: 'Account Setting',
    icon: 'account-circle',
  },
]
