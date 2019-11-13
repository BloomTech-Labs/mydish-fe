import {createStackNavigator} from 'react-navigation-stack';
import CreateRecipeForm from '../components/CreateRecipeForm';
import HomePage from '../components/HomePage';
import IndividualRecipes from '../components/IndividualRecipe.js'

const CreateNavigator = createStackNavigator({
    Create : {screen : CreateRecipeForm},
    Home : {screen : HomePage},
    IndividualR : {screen : IndividualRecipes}
}, {initialRouteName : 'Create'})

export default CreateNavigator;

