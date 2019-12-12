import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../components/HomePage";
import IndividualRecipe from "../components/IndividualRecipe";
import EditForm from "../components/EditForm.js";

const RecipeNavigator = createStackNavigator(
    {
        Home: { screen: HomePage },
        IndividualR: { screen: IndividualRecipe },
        Edit: { screen: EditForm },
    },
    { initialRouteName: "Home" },
);

export default RecipeNavigator;
