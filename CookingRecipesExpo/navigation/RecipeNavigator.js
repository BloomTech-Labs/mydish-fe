import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../components/HomePage';
import IndividualRecipe from '../components/IndividualRecipe';


const RecipeNavigator = createStackNavigator({
    Home : {screen : HomePage},
    IndividualR : {screen : IndividualRecipe}
},{initialRouteName : 'Home'})

export default RecipeNavigator;
