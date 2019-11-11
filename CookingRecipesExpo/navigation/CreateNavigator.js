import createStackNavigator from 'react-navigation-stack';
import CreateRecipeForm from '../components/CreateRecipeForm';
import HomePage from '../components/HomePage';

const CreateNavigator = createStackNavigator({
    Create : {screen : CreateRecipeForm},
    Home : {screen : HomePage}
}, {initialRouteName : 'Create'})


export default CreateNavigator;

