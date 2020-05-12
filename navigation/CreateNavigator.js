import { createStackNavigator } from 'react-navigation-stack';
import CreateRecipeForm from '../components/CreateRecipeForm';
import IndividualRecipes from '../components/IndividualRecipe.js';
import CreateRecipePicker from '../components/CreateRecipePicker.js';
import GenerateRecipeForm from '../components/GenerateRecipeForm.js';

const CreateNavigator = createStackNavigator(
  {
    RecipePicker: {
      screen: CreateRecipePicker,
      navigationOptions: {
        headerLeft: null,
      },
    },
    GenerateRecipe: {
      screen: GenerateRecipeForm,
    },
    Create: {
      screen: CreateRecipeForm,
    },
    IndividualR: {
      screen: IndividualRecipes,
      navigationOptions: {
        headerLeft: null,
      },
    },
  },
  {
    initialRouteName: 'Create',
    headerLayoutPreset: 'center',
  }
);

export default CreateNavigator;
