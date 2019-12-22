import React, {Component} from 'react';
import {
  Card,
  CardItem,
  Body,
  Thumbnail,
  Left,
  Right,
  Button,
  Text,
} from 'native-base';
import {Icon} from 'react-native-elements';

export default class CardItemButton extends Component {
  render() {
    return (
      <Card>
        <CardItem
          //header
          button
          onPress={() => alert('咕咕咕')}
          style={{backgroundColor: '#FFFFFF'}}
        >
          <Left>
            <Thumbnail
              source={{
                uri:
                  'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg',
              }}
            />
            <Body>
              <Text>CSC3xx 找队友</Text>
              <Text note numberOfLines={1}>
                我一定不会鸽的
              </Text>
            </Body>
            <Icon name="plus-one" />
          </Left>
        </CardItem>
      </Card>
    );
  }
}
