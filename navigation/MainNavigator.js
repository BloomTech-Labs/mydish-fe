import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RecipeNavigator from './RecipeNavigator';
import CreateNavigator from './CreateNavigator';
import CookBookNavigator from './CookbookNavigator';
import styles from '../styles/navigation.styles';
import home from '../assets/home-icon.png';
import cookbook from '../assets/cookbook-icon.png';
import create from '../assets/create-icon.png';

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: RecipeNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: <Image style={styles.tab} source={home} />,
        tabBarOnPress: ({ navigation }) => {
          navigation.pop();
          navigation.navigate('Home');
        },
      },
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        tabBarLabel: 'Create',
        tabBarIcon: <Image style={styles.tab} source={create} />,
        tabBarOnPress: ({ navigation }) => {
          navigation.pop();
          navigation.navigate('RecipePicker');
        },
      },
    },
    CookBook: {
      screen: CookBookNavigator,
      navigationOptions: {
        tabBarLabel: 'CookBook',
        tabBarIcon: <Image style={styles.tab} source={cookbook} />,
        tabBarOnPress: ({ navigation }) => {
          navigation.pop();
          navigation.navigate('CookBook');
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
  }
);

export default MainNavigator;
