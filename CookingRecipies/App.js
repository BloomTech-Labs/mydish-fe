import React from 'react';

import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from "react-navigation-stack";
import AsyncStorage from '@react-native-community/async-storage'
import {View, ActivityIndicator, StatusBar} from 'react-native'

import HomePage from './Component/homePage.js'
import Login from './Component/Login.js'
import SignUp from './Component/signUp'
import MyCookBook from './Component/MyCookBook.js'
import CookBookFolder from "./Component/CookBookFolder";

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
  
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };


  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


const CookBookNavigator =  createStackNavigator({
  CookBook: {screen:  MyCookBook},
  FolderInCookBook:  {screen: CookBookFolder}
}, {initialRouteName: "CookBook"})

const LoginNavigator = createStackNavigator({
  Login: {screen: Login},
  SignUp: {screen: SignUp}
},
{
  initialRouteName: 'Login',
})

const MainNavigator = createBottomTabNavigator({
  Home: {screen: HomePage},
  List: {screen: SignUp},
  Create: {screen: SignUp},
  CookBook: CookBookNavigator,
  Profile: {screen: SignUp},
},
{
  initialRouteName: 'Home',
  
},
);

const AuthNavigator = createBottomTabNavigator({
  Home: {screen: HomePage},
  List: LoginNavigator,
  Create: LoginNavigator,
  CookBook: LoginNavigator,
  Profile: LoginNavigator,
},
{
  initialRouteName: 'Home',
  
});


const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: MainNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'AuthLoading',
  }) 
  );

export default App = () => {
  return (
    <AppContainer/>
  )
}