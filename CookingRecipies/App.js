
import React from 'react';

import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomePage from './Component/homePage.js'
import Login from './Component/Login.js'
import SignUp from './Component/signUp'
import {createStackNavigator} from "react-navigation-stack";
import CookBookFolder from "./Component/CookBookFolder";


const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomePage},
  Login: {screen: Login},
  SignUp: {screen: SignUp},
  CookBook: CookBookNavigator
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const CookBookNavigator =  createStackNavigator({
  CookBook: {screen:  CookBook},
  FolderInCookBook:  {screen: CookBookFolder}
}, {initialRouteName: "CookBook"})

const AppContainer = createAppContainer(TabNavigator);

export default App = () => {
  return (
    <AppContainer/>
  )
}