import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
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
  pressLogin() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.profileBackground}>
        <View style={styles.profileSettingView}>
          <View style={{flex: 8}}></View>
          <TouchableOpacity style={{flex: 1, backgroundColor: 'white'}}>
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
          <TouchableOpacity style={styles.profileListItem}>
            <FontAwesomeIcon icon={faHandPeace} />
            <Text style={styles.profileItemFont}> 我的Link</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileListItem}>
            <FontAwesomeIcon icon={faPaw} />
            <Text style={styles.profileItemFont}> 历史Link</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileListItem}>
            <FontAwesomeIcon icon={faUser} />
            <Text style={styles.profileItemFont}> 我的资料</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileListItem}>
            <FontAwesomeIcon icon={faShieldAlt} />
            <Text style={styles.profileItemFont}> 账户信息</Text>
          </TouchableOpacity>

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

const styles = StyleSheet.create({
  profileBackground: {
    flex: 1,
    flexDirection: 'column',
  },
  profileSettingView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBasicInfoView: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  profileImageView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileNameView: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profileBottomSection: {
    flex: 9,
    alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: 10,
  },
  profieItemListContainer: {
    flex: 6,
    flexDirection: 'column',
    //justifyContent: 'space-around',
    //borderBottomWidth: 1,
    width: '100%',
  },
  profileListItem: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(245, 221, 133)',
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderTopWidth: 1,
    borderColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 5,
  },
  profileItemView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(241, 112, 16)',
    borderRadius: 5,
  },
  profileNameFont: {
    fontSize: 24,
    color: 'rgb(241, 112, 16)',
  },
  profileItemFont: {
    fontSize: 18,
  },
});
