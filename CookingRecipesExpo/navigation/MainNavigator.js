import React from 'react';
import {Image, AsyncStorage} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RecipeNavigator from './RecipeNavigator';
import CreateNavigator from './CreateNavigator';
import CookBookNavigator from './CookbookNavigator'
import Login from '../components/Login';
import styles from '../styles/navigation.styles';
import search from '../assets/Union.png';
import plus from '../assets/add_circle_grey.png';
import logout from '../assets/account_circle.png';
import fork from '../assets/restaurant_grey.png'

const MainNavigator = createBottomTabNavigator({
    Home : {screen : RecipeNavigator,
            navigationOptions : {
                tabBarLabel : 'Explore',
                tabBarIcon : ( <Image style={styles.homeTab} source={search}/>),
                tabBarOnPress : ({navigation}) => {
                    navigation.push('Home');
                }
            }},
    Create : {screen : CreateNavigator,
            navigationOptions : {
                tabBarLabel : 'Create',
                tabBarIcon : (<Image style={styles.createTab} source={plus}/>),
                tabBarOnPress : ({navigation}) => {
                    navigation.push('Create');
                }
            }},
    CookBook : {screen: CookBookNavigator,
        navigationOptions : {
            tabBarLabel : 'CookBook',
            tabBarIcon : (<Image style={styles.createTab} source={fork}/>)
        }},

    Profile : {screen : Login, 
                navigationOptions : {
                    tabBarLabel : 'Sign Out',
                    tabBarIcon : (<Image style={styles.loginTab} source={logout}/>),
                    tabBarOnPress : async ({navigation}) => {
                        await AsyncStorage.clear();
                        navigation.navigate('Auth');
                    }
                }
            }
    }, {initialRouteName : 'Home'})

  
    
export default MainNavigator;
