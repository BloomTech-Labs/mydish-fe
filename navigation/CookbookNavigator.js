import { createStackNavigator } from 'react-navigation-stack';
import MyCookBook from '../components/MyCookBook';
import CookBookFolder from '../components/CookBookFolder';
import IndividualRecipes from '../components/IndividualRecipe.js';

const CookBookNavigator = createStackNavigator(
  {
    CookBook: { screen: MyCookBook },
    Folder: { screen: CookBookFolder },
    IndividualR: { screen: IndividualRecipes },
  },
  {
    initialRouteName: 'CookBook',
    headerLayoutPreset: 'center',
  }
);

export default CookBookNavigator;
