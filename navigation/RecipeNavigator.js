import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../components/HomePage";
import IndividualRecipe from "../components/IndividualRecipe";
import VersionHistoryList from "../components/VersionHistoryList";
import CookBookFolder from "../components/CookBookFolder";

const RecipeNavigator = createStackNavigator(
    {
        Folder: { screen: CookBookFolder },
        Home: { screen: HomePage },
        IndividualR: { screen: IndividualRecipe },
        VersionHistoryList: { screen: VersionHistoryList },
    },
    { initialRouteName: "Home", headerLayoutPreset: "center" },
);

export default RecipeNavigator;
