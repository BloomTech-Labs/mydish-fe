import React from 'react';
import RecipeList from './Components/RecipeList';
import {View, Text, SafeAreaView, } from 'react-native';
import styles from './styles/styles';
import Search from "./Component/Search";


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
  initialRouteName: 'Home'
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