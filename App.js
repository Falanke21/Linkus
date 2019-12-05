import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';

import LoginPage from './screens/security/LoginPage';
import HomePage from './screens/home/HomePage';
import LinkusPage from './screens/link/LinkusPage';
import ProfilePage from './screens/profile/ProfilePage';
import ForumPage from './screens/forum/ForumPage';
import SettingPage from './screens/setting/SettingPage';
import MyLinkPage from './screens/profile/MyLinkPage';


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

const SecurityStack = createStackNavigator(
  {
    Login: LoginPage,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffe066',
      },
    },
  }
);

const MainStack = createBottomTabNavigator(
  {
    首页: HomeStack,
    Link: LinkusStack,
    论坛: ForumStack,
    我: ProfileStack,
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


const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let iconName;
  switch (routeName) {//icon use ionicon
    case '首页':
      iconName = 'md-compass';
      break;
    case 'Link':
      iconName = 'md-bonfire';
      break;
    case '论坛':
      iconName = 'md-beer';
      break;
    case '我':
      iconName = 'md-finger-print';
      break;
  }

  return <Ionicons name={iconName} size={25} color={tintColor} />;
};

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Security: {
      screen: SecurityStack,
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
