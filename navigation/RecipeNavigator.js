import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../components/HomePage";
import IndividualRecipe from "../components/IndividualRecipe";
import VersionHistoryList from "../components/VersionHistoryList";
import CookBookFolder from "../components/CookBookFolder";
import MyProfile from "../components/MyProfile";
import OtherProfile from "../components/OtherProfile";

const RecipeNavigator = createStackNavigator(
    {
        Folder: { screen: CookBookFolder },
        Home: { screen: HomePage },
        IndividualR: { screen: IndividualRecipe },
        VersionHistoryList: { screen: VersionHistoryList },
        MyProfile: { screen: MyProfile },
        OtherProfile: { screen: OtherProfile },
    },
    { initialRouteName: "Home", headerLayoutPreset: "center" },
);

export default RecipeNavigator;
