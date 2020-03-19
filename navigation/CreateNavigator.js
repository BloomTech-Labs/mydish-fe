import { createStackNavigator } from "react-navigation-stack";
import CreateRecipeForm from "../components/CreateRecipeForm";
import IndividualRecipes from "../components/IndividualRecipe.js";

const CreateNavigator = createStackNavigator(
    {
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
        initialRouteName: "Create",
        headerLayoutPreset: "center",
    },
);

export default CreateNavigator;
