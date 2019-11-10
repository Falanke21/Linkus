import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

class ProfilePage extends React.Component {
  render() {
    return (
      <View style={styles.profileBackground}>
        <View style={styles.profileSettingView}>
          <View style={{flex: 8}}></View>
          <TouchableOpacity style={{flex: 1, backgroundColor: 'black'}}>
          </TouchableOpacity>
        </View>
        <View style={styles.profileImageView}>
          <Image
            style={{width: 150, height: 150, borderRadius: 75}}
            source={{uri: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg'}}
          />
        </View>
        <View style={styles.profileNameView}>
          <Text style={styles.profileNameFont}>MyName</Text>
        </View>
        <View style={styles.profileBottomSection}>

          <View style={styles.profieItemListContainer}>
            <TouchableOpacity
              style={styles.profileListItem}
            >
              <Text style={styles.profileItemFont}>My Link</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileListItem}
            >
              <Text style={styles.profileItemFont}>History Link</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileListItem}
            >
              <Text style={styles.profileItemFont}>My Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 8}}></View>
        </View>
      </View>
    );
  }
}

export default ProfilePage;


const styles = StyleSheet.create({
  profileBackground: {
    flex: 1,
    flexDirection: "column"

  },
  profileSettingView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileImageView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileNameView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  profileBottomSection: {
    flex:8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10
  },
  profieItemListContainer: {
    flex:6,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    width: '100%'
  },
  profileListItem:{
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgb(245, 221, 133)',
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderTopWidth: 1,
    borderColor: 'gray',
    borderStyle: 'dashed'
  },
  profileNameFont:{
    fontSize: 24,
    color: 'rgb(241, 112, 16)'
  },
  profileItemFont:{
    fontSize: 18
  }
});
