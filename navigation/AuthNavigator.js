import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RecipeNavigator from './RecipeNavigator';
import LoginNavigator from './LoginNavigator';
import styles from '../styles/navigation.styles';
import search from '../assets/search-icon.png';
import login from '../assets/profile-icon.png';

const AuthNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: RecipeNavigator,
      navigationOptions: {
        tabBarLabel: 'Browse',
        tabBarIcon: <Image style={styles.tab} source={search} />,
      },
    },
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: <Image style={styles.tab} source={login} />,
      },
    },
  },
  { initialRouteName: 'Login' }
);

export default AuthNavigator;
