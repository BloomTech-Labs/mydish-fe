import {createStackNavigator} from 'react-navigation-stack';
import homePage from '../components/homePage';
import IndividualRecipe from '../components/IndividualRecipe';


const RecipeNavigator = createStackNavigator({
<<<<<<< HEAD
    Home : {screen : homePage},
    IndividualRecipe : {screen : IndividualRecipe}
=======
    Home : {screen : HomePage},
    IndividualR : {screen : IndividualRecipe}
>>>>>>> a0fa37828a25531aa56d77a58f1daee171dc2ac6
},{initialRouteName : 'Home'})

export default RecipeNavigator;
