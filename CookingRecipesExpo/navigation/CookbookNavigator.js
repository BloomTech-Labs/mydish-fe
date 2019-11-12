import {createStackNavigator} from 'react-navigation-stack';
import MyCookBook from '../components/MyCookBook';
import CookBookFolder from '../components/CookBookFolder';

    const CookBookNavigator =  createStackNavigator({
        CookBook : {screen: MyCookBook},
        FolderInCookbook : {screen : CookBookFolder}
        },{initialRouteName: "CookBook"})

export default CookBookNavigator;


