import React, { Component } from "react";
import {
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Right,
  Button,
  Icon,
  Text
} from "native-base";
export default class CardItemButton extends Component {
  enterPost() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Card>
        <CardItem header button onPress={() => alert("咕咕咕")}>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"
              }}
            />
            <Body>
              <Text>我是一个小和尚</Text>
              <Text note>最后回复 1小时前 [聊天休闲]</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem button onPress={() => this.enterPost()}>
          <Body>
            <Text>请问如果我的东西被室友扔了怎么办</Text>
          </Body>
        </CardItem>
        <CardItem footer button onPress={() => alert("This is Card Footer")}>
          <Left>
            <Text>啊啊啊啊啊啊啊啊啊啊</Text>
          </Left>
          <Right>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
