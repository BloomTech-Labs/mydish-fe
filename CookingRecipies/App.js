import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from "react-navigation-stack";
import AsyncStorage from '@react-native-community/async-storage'
import {View, ActivityIndicator, StatusBar, Image} from 'react-native'

import HomePage from './Components/homePage.js'
import Login from './Components/Login.js'
import SignUp from './Components/signUp.js'
import MyCookBook from './Components/MyCookBook.js'
import CreateRecipeForm from './Components/CreateRecipeForm.js'
import CookBookFolder from "./Components/CookBookFolder";
import IndividualRecipes from './Components/IndividualRecipes.js';
import Signout from './Components/Signout.js';
import Recipe from './Components/Recipe.js'
import plus from './assets/add_circle_grey.png';
import person from './assets/person_outline.png';
import list from './assets/assignment.png';
import search from './assets/Union.png';
import logout from './assets/account_circle.png';
import searchBlack from './assets/search_black.png';
import cooks from './assets/restaurant.png';

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


const CreateNavigator =  createStackNavigator({
  Create: {screen:  CreateRecipeForm},
  Home:  {screen: HomePage}
}, {initialRouteName: "Create"})

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
});

const RecipeNavigator = createStackNavigator({
  Home: {screen: HomePage},
  IndividualR: {screen: IndividualRecipes}
},
{
  initialRouteName: 'Home',
});

const MainNavigator = createBottomTabNavigator({
  Home: {screen: RecipeNavigator,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: (
            <Image style={{ width: 20, height: 20, paddingLeft: 28}} source={search}/>
            
      ),
    }
  },
//   List: {screen: SignUp,
//       navigationOptions: {
//     tabBarLabel: 'My List',
//     tabBarIcon: (
//           <Image style={{ width: 25, height: 25, paddingTop:10 }} source={list}/>
//     ),
//   }
// },
  Create: {screen: CreateNavigator,
    navigationOptions: {
      tabBarLabel: 'Create',
      tabBarIcon: (
            <Image style={{ width: 25, height: 25, paddingTop:10 }} source={plus}/>
      ),
    }},
  // CookBook: { screen: CookBookNavigator,
  //   navigationOptions: {
  //     tabBarLabel: 'CookBook',
  //     tabBarIcon: (
  //           <Image style={{ width: 25, height: 25, paddingTop:10 }} source={cooks}/>
  //     ),
  //   }},
  Profile: {screen: Signout,
    navigationOptions: {
      tabBarLabel: 'Sign Out', 
      tabBarIcon: (
        <Image style={{ width: 25, height: 25}} source={logout}/>
        
  ),
    tabBarOnPress: async ({navigation}) => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    }
    }},
},
{
  initialRouteName: 'Home',
  
},
);

const AuthNavigator = createBottomTabNavigator({
  Home: {screen: HomePage,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: (
            <Image  style={{width: 20, height: 20, paddingLeft: 28}} source={search}/>
      )
    }
  },
  // List: {screen: LoginNavigator,
  //   navigationOptions: {
  //     tabBarLabel: 'My List',
  //     tabBarIcon: (
  //           <Image style={{ width: 25, height: 25, paddingTop:10 }} source={list}/>
  //     ),
  //   }
  // }, 
  Create: {screen: LoginNavigator,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: (
            <Image style={{ width: 25, height: 25, paddingTop:10 }} source={logout}/>
      ),
    }
  },
  // CookBook: {screen: LoginNavigator,
  //   navigationOptions: {
  //     tabBarLabel: 'CookBook',
  //     tabBarIcon: (
  //           <Image style={{ width: 25, height: 25, paddingTop:10 }} source={cooks}/>
  //     ),
  //   }
  // },
  // Profile: {screen: LoginNavigator,
  //   navigationOptions: {
  //     tabBarLabel: 'Profile',
  //     tabBarIcon: (
  //           <Image style={{ width: 25, height: 25, paddingTop:10 }} source={person}/>
  //     ),
  //   }
  // },
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

export const App = () => {
  return (
    <AppContainer/>
  )
}
