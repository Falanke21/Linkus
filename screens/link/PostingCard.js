import React, {Component} from 'react';
import {
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Right,
  Button,
  Icon,
  Text,
} from 'native-base';
export default class CardItemButton extends Component {
  render() {
    return (
      <Card>
        <CardItem header button onPress={() => alert('咕咕咕')}>
          <Left>
            <Thumbnail
              source={{
                uri:
                  'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
              }}
            />
            <Body>
              <Text>CSC3xx 找队友</Text>
              <Text note>我一定不会鸽的</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
