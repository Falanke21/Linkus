import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import styles from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faShieldAlt,
  faCog,
  faBars,
  faPaw,
  faUser,
  faHandPeace
} from "@fortawesome/free-solid-svg-icons";

export default class ProfilePage extends React.Component {
  pressLogin() {
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.profileBackground}>
        <View style={styles.profileSettingView}>
          <View style={{ flex: 8 }}></View>
          <TouchableOpacity style={{ flex: 1, backgroundColor: "white" }}>
            <FontAwesomeIcon icon={faCog} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileBasicInfoView}>
          <View style={styles.profileImageView}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 40 }}
              source={{
                uri:
                  "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
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
            style={{ flex: 8, alignItems: "center", justifyContent: "center" }}
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
