import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../components/HomePage'


const RecipeNavigator = createStackNavigator({
    Home : {screen : HomePage},
    IndividualRecipe : {screen : IndividualRecipe}
},{initialRouteName : 'Home'})

export default RecipeNavigator;
