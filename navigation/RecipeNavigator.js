import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../components/HomePage";
import IndividualRecipe from "../components/IndividualRecipe";
import VersionHistoryList from "../components/VersionHistoryList";
<<<<<<< HEAD
=======
import CookBookFolder from "../components/CookBookFolder";
>>>>>>> c74c8f39c163e2569fc36248c2a9fb4eb35be2b8

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
