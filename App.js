import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';

import LoginPage from './screens/login/LoginPage';
import HomePage from './screens/home/HomePage';
import LinkusPage from './screens/link/LinkusPage';
import ProfilePage from './screens/profile/ProfilePage';
import ForumPage from './screens/forum/ForumPage';
import SettingPage from './screens/setting/SettingPage';
import MyLinkPage from './screens/profile/MyLinkPage';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let iconName;
  switch (routeName) {
    case 'Home':
      iconName = 'md-menu';
      break;
    case 'Linkus':
      iconName = 'md-headset';
      break;
    case 'Profile':
      iconName = 'md-person';
      break;
    case 'Setting':
      iconName = 'md-person';
      break;
  }

  return <Ionicons name={iconName} size={25} color={tintColor} />;
};

const HomeStack = createStackNavigator(
  {
    Home: HomePage,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffe066',
      },
    },
  }
);

const ForumStack = createStackNavigator(
  {
    Forum: ForumPage,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffe066',
      },
    },
  }
);

const LinkusStack = createStackNavigator(
  {
    Linkus: LinkusPage,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffe066',
      },
    },
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfilePage,
    MyLink: MyLinkPage,
    Setting: SettingPage,
  },
  {
    defaultNavigationOptions: {
      initialRouteName: 'Profile',
      headerStyle: {
        backgroundColor: '#ffe066',
      },
    },
  }
);


const MainStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Linkus: LinkusStack,
    Forum: ForumStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#ffe066',
      inactiveTintColor: '#737373',
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Login: {
      screen: LoginPage,
    },
    Forum: {
      screen: ForumStack,
    },
    Profile: {
      screen: ProfileStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack);
