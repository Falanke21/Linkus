import React, { Component } from "react";
import {
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Right,
  Button,
  Text
} from "native-base";
import { Icon } from "react-native-elements";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userIcon: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    width: 60,
    height: 60,
  },
  userNameText:{
    fontSize: 12,
    color: "#d6d7da"
  },
  copyInfoBtn:{
    width: 75,
    height: 20
  }
});
export default class CardItemButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kch3coo",
      tag: "找队友",
      desc: "GPA0.4 寻找队友！！",
      posted_time: "2hr ago",
      contact_info: [
        { type: "微信号", contact_id: "kimochiwaruii" },
        { type: "Text", contact_id: "6049983732" }
      ]
    };
  }
  render() {
    return (
      <Card>
        <CardItem
          //header
          button
          onPress={() => alert("咕咕咕")}
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* <Thumbnail
            small
            source={{
              uri:
                "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
            }}
          /> */}
          <View style={{ flexDirection: "column", justifyContent: "flex-start"}}>
          <View >
              <Text style={styles.userNameText}>{this.state.name} </Text>
            </View>
            <View >
              <Image
                style={styles.userIcon}
                source={require("../../assets/img/icon.png")}
              />
            </View>

          </View>

          <View style={{ flexDirection: "column", marginLeft: 20, marginTop: 20 }}>
          <Text note numberOfLines={1}>
              {this.state.desc}
            </Text>
            <Text style={{ fontSize: 10, marginTop: 10 }}>联系方式：</Text>
              <View>
                <Text note numberOfLines={2}>
                  {this.state.contact_info[0].type}:
                  {this.state.contact_info[0].contact_id}
                </Text>
                <Button bordered light style={styles.copyInfoBtn}><Text style={{ fontSize: 10}}>一键复制</Text></Button>
              </View>
              <View>
                <Text note numberOfLines={2}>
                  {this.state.contact_info[1].type}:
                  {this.state.contact_info[1].contact_id}
                </Text>
                <Button bordered light style={styles.copyInfoBtn}><Text style={{ fontSize: 10}}>一键复制</Text></Button>
              </View>
          </View>
          <Body>

            

           
          </Body>
        </CardItem>
      </Card>
    );
  }
}
