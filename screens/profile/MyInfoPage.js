import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Button,
  List,
  ListItem,
  Divider,
  Avatar,
  Overlay,
} from 'react-native-elements';
import theme from '../Data/Theme.json';
import user from '../Data/UserProfile.json';
import { ThemeColors } from 'react-navigation';

export default class MyLinkPage extends React.Component {
  static navigationOptions = {
    title: '个人资料',
  };

  state = {
    avatar: '',
    username: '',
    UTemail: '',
    campus: '',
    courses: '',
    description: '',
    contact: [],
    isVisible: false,
    changingType: 'DNE',
    changingTitle: 'DNE',
    changingContent: 'DNE',
  };


  componentDidMount() {
    console.log(this.state.username);
    console.log(this.state.contact);
  }

  componentWillUnmount(){
    this.state = {isVisible: false}
    console.log("will unmount")
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 130}}
        >
          <Avatar
            source={{
              uri: user.avatar,
            }}
            avatarStyle={{width: 90, height: 90}}
            containerStyle={{width: 90, height: 90}}
            rounded
            xlarge
            showEditButton
          />
        </View>
        <View style={{width: '100%'}}>
          <Text style={{fontSize: 16, padding: 15, fontWeight: 'bold'}}>
            基本信息
          </Text>
          <Divider />
          {BasicInfo.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              titleStyle={{fontSize: 16}}
              rightTitle={item.content}
              onPress={() => this.pressList(item.title, item.type, item.content)}
              containerStyle={{height: 50}}
              //bottomDivider
              chevron
            />
          ))}
        </View>
        <View style={{width: '100%'}}>
          <Text style={{fontSize: 16, padding: 15, fontWeight: 'bold'}}>
            联系方式
          </Text>
          <Divider />
          {user.contact.map((item, i) => (
            <ListItem
              key={i}
              title={item[0]}
              titleStyle={{fontSize: 16}}
              rightTitle={item[1]}
              rightTitleNumberOfLines={1}
              onPress={() => this.pressList('联系', item[0], item[1])}
              containerStyle={{height: 50}}
              //bottomDivider
              chevron
            />
          ))}
        </View>
        <Overlay
          isVisible={this.state.isVisible}
          overlayBackgroundColor="#FFFFFF"
          windowBackgroundColor="rgba(255, 255, 255, 0.7)"
          onBackdropPress={() => this.setState({ isVisible: false })}
          width="80%"
          height='40%'
        >
          
          <Text style={{alignSelf: 'center', fontSize: 20, padding: 15}}>{this.state.changingTitle}</Text>
          <View style={{height: "50%", width:"100%", justifyContent:'center', alignItems:'center'}}>
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
          <View style={{alignItems: 'center', justifyContent: "center", height: '30%', flexDirection: 'row'}}>
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
              onPress={() => this.pressSubmit(this.state.changingContent)}
            />
          </View>
        </Overlay>

      </ScrollView>
    );
  }

  pressList(title, type, content) {
    // if (type == 'campus') {
    //   this.setState({campus: 'UTSG'});
    //   console.log(this.state.campus);
    // } else {
    //   alert('asd');
    // }
    this.setState({isVisible: true, changingType: type, changingTitle: title, changingContent: content})
    console.log(this.state.title)
  }

  
  TextInputHandler(content){
    this.setState({changingContent: content})
    console.log(this.state.changingContent)
  }

  pressSubmit(content) {
    console.log(this.state.changingTitle);
    console.log(this.state.changingType);
    console.log(this.state.changingContent);
    
    if (this.state.changingType == "username"){
      this.setState({username: content});
      console.log("updated username:")
      console.log(this.state.username);
    } else if(this.state.changingType == "campus"){
      this.setState({campus: content});
      console.log("updated campus:")
      console.log(this.state.campus);
    } else if(this.state.changingType == "description"){
      this.setState({description: content});
      console.log("updated description:")
      console.log(this.state.description);
    }
    this.setState({isVisible: false});
  }
}

const BasicInfo = [
  {
    title: '用户名',
    content: user.username,
    type: 'username',
  },
  {
    title: 'UT邮箱',
    content: '',
    type: 'UTemail',
  },
  {
    title: '校区',
    content: user.campus,
    type: 'campus',
  },
  {
    title: '课程',
    content: user.courses,
    type: 'courses',
  },
  {
    title: '签名',
    content: user.description,
    type: 'description',
  },
];
