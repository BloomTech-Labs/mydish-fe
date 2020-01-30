import { createStackNavigator } from "react-navigation-stack";
import CreateRecipeForm from "../components/CreateRecipeForm";
import HomePage from "../components/HomePage";
import IndividualRecipes from "../components/IndividualRecipe.js";

const CreateNavigator = createStackNavigator(
    {
        Create: {
            screen: CreateRecipeForm,
            //   navigationOptions : {
            //       title : "Create",
            //       headerLeft: null
            //   }
        },
        IndividualR: {
            screen: IndividualRecipes,
            navigationOptions: {
                // title : "CookBook"
                headerLeft: null,
            },
        },
        Home: {
            screen: HomePage
        }

    },
    {
        initialRouteName: "Create",
        headerLayoutPreset: "center",
    },
);

export default CreateNavigator;
