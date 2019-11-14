import {createStackNavigator} from 'react-navigation-stack';
import CreateRecipeForm from '../components/CreateRecipeForm';
<<<<<<< HEAD
import homePage from '../components/homePage';

const CreateNavigator = createStackNavigator({
    Create : {screen : CreateRecipeForm},
    Home : {screen : homePage}
=======
import HomePage from '../components/HomePage';
import IndividualRecipes from '../components/IndividualRecipe.js'

const CreateNavigator = createStackNavigator({
    Create : {screen : CreateRecipeForm},
    Home : {screen : HomePage},
    IndividualR : {screen : IndividualRecipes}
>>>>>>> a0fa37828a25531aa56d77a58f1daee171dc2ac6
}, {initialRouteName : 'Create'})

export default CreateNavigator;

