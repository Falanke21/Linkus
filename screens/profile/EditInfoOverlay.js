import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Button, Overlay} from 'react-native-elements';

export default class EditInfoOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changingTitle: this.props.changingTitle,
      changingContent: this.props.changingContent,
      changingType: this.props.changingType,
      isVisible: this.props.isVisible
    };
  }

  render() {
    return (
      <Overlay
        isVisible={this.state.isVisible}
        overlayBackgroundColor="#FFFFFF"
        windowBackgroundColor="rgba(255, 255, 255, 0.7)"
        onBackdropPress={() => this.setState({isVisible: false})}
        width="80%"
        height="40%"
      >
        <Text style={{alignSelf: 'center', fontSize: 20, padding: 15}}>
          {this.state.changingTitle}
        </Text>
        <View
          style={{
            height: '50%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextInput
            onChangeText={content => this.TextInputHandler(content)}
            value={this.state.changingContent}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="go"
            style={{
              borderColor: '#062958',
              borderWidth: 2,
              borderRadius: 25,
              textAlign: 'center',
              height: 50,
              width: '90%',
              alignContent: 'flex-start',
              fontSize: 18,
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '30%',
            flexDirection: 'row',
          }}
        >
          <Button
            title="取消"
            buttonStyle={{paddingVertical: 20, paddingHorizontal: 40}}
            type="clear"
            onPress={() => this.setState({isVisible: false})}
          />
          <Button
            title="修改"
            buttonStyle={{paddingVertical: 20, paddingHorizontal: 40}}
            type="clear"
            onPress={() => this.pressSubmit()} //(this.state.changingContent)}
          />
        </View>
      </Overlay>
    );
  }
}
