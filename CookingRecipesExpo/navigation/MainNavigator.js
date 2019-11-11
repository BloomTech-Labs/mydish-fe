import {Image, AsyncStorage} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RecipeNavigator from './RecipeNavigator';
import CreateNavigator from './CreateNavigator'
import styles from '../styles/navigation.styles';
import search from '../assets/Union.png';
import plus from '../assets/add_circle_grey.png';
import logout from '../assets/account_circle.png';

const MainNavigator = createBottomTabNavigator({
    Home : {screen : RecipeNavigator,
            navigationOptions : {
                tabBarLabel : 'Explore',
                tabBarIcon : ( <Image style={styles.homeTab} source={search}/>)
            }},
    Create : {screen : CreateNavigator,
            navigationOptions : {
                tabBarLabel : 'Create',
                tabBarIcon : (<Image style={styles.createTab} source={plus}/>)
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
