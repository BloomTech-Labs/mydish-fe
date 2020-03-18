import {createStackNavigator} from "react-navigation-stack";
import HomePage from "../components/HomePage";
import IndividualRecipe from "../components/IndividualRecipe";
import VersionHistoryList from "../components/VersionHistoryList";

const RecipeNavigator = createStackNavigator(
  {
    Home: {screen: HomePage},
    IndividualR: {screen: IndividualRecipe},
    VersionHistoryList: {screen: VersionHistoryList},
  },
  {initialRouteName: "Home", headerLayoutPreset: "center"},
);

export default RecipeNavigator;
