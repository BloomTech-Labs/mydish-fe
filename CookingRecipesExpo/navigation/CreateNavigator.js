import {createStackNavigator} from 'react-navigation-stack';
import CreateRecipeForm from '../components/CreateRecipeForm';
import homePage from '../components/homePage';

const CreateNavigator = createStackNavigator({
    Create : {screen : CreateRecipeForm},
    Home : {screen : homePage}
}, {initialRouteName : 'Create'})

export default CreateNavigator;

