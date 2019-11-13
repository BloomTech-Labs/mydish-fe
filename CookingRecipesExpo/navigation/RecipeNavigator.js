import {createStackNavigator} from 'react-navigation-stack';
import homePage from '../components/homePage';
import IndividualRecipe from '../components/IndividualRecipe';


const RecipeNavigator = createStackNavigator({
    Home : {screen : homePage},
    IndividualRecipe : {screen : IndividualRecipe}
},{initialRouteName : 'Home'})

export default RecipeNavigator;
