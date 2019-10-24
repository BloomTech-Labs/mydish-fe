import React from 'react';

import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomePage from './Component/homePage.js'
import Login from './Component/Login.js'
import SignUp from './Component/signUp'
import {createStackNavigator} from "react-navigation-stack";
import CookBookFolder from "./Component/CookBookFolder";



const CookBookNavigator =  createStackNavigator({
  CookBook: {screen:  CookBook},
  FolderInCookBook:  {screen: CookBookFolder}
}, {initialRouteName: "CookBook"})

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomePage},
  List: {screen: SignUp},
  Create: {screen: SignUp},
  Cookbook: {screen: SignUp},
  Profile: {screen: Login},
  CookBook: CookBookNavigator
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  
});


const AppContainer = createAppContainer(TabNavigator);

export default App = () => {
  return (
    <AppContainer/>
  )
}