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
              <Text>Frank Hua</Text>
              <Text note>鸽子</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem button onPress={() => alert("This is Card Body")}>
          <Body>
            <Text>CSC3xx 找队友</Text>
          </Body>
        </CardItem>
        <CardItem footer button onPress={() => alert("This is Card Footer")}>
          <Left>
            <Text>我一定不会鸽的</Text>
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
