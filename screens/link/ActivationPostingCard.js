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
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  userIcon: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    width: 60,
    height: 60,
  },
  TitleText:{
    fontSize: 12,
    color: "#d6d7da"
  },
  CourseNumber:{
    width: 55,
    height: 10
  },
  copyInfoBtn:{
    width: 65,
    height: 25
  }
  });
export default class CardItemButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "找队友",
      desc: "GPA0.4 寻找队友！！",
      last_activate_time: "2020-01-23 12:31",
      course_number: "CSC148",
      section_number: "LEC0501",
      activatable : true
    };
  }
  render() {
    return (
      <Card>
        <CardItem
          //header
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
          <View style={{ flexDirection: "column", marginLeft: -20, marginRight:5}}>
          <Text note numberOfLines={2}>
              题目：{this.state.desc}
              </Text>
              <View>
                <Text note numberOfLines={2}>Course Number: {this.state.course_number}</Text>
              </View>
              <View>
                <Text note numberOfLines={2}>Section Number: {this.state.section_number}</Text>
              </View>
              <View>
                <Text note numberOfLines={2} style = {{fontSize:10}}>Last Activation Time: {this.state.last_activate_time}</Text>
              </View>
              
          </View>

          <View style={{ flexDirection: "column"}}>
          <View style = {{flexDirection: "column", marginBottom: 10}}>
        <Button disabled = {this.state.activatable == false} onPress = {() => {alert("已成功激活"); this.setState({activatable: false})}}   style={styles.copyInfoBtn}><Text style={{ fontSize: 8}}>激活，顶上去！</Text></Button>
        </View>
        <View style = {{flexDirection: "column", marginBottom: 10}}>
        <Button disabled = {this.state.activatable == true} onPress = {() => alert("已失效，无法激活")}  style={styles.copyInfoBtn}><Text style={{ fontSize: 8}}>失效，不用找啦</Text></Button>
        </View>
          </View>
          </View>
          <Body>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
