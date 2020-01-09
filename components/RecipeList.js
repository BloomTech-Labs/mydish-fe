import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "./Recipe";
import { ScrollView, View } from "react-native";
import styles from "../styles/recipe-styles";
import RecipeListContainer from "./StyledComponents/RecipeListContainer";
import { fetchCookbook } from "../store/cookbook/cookbookAction";

const RecipeList = ({parent, folder}) => {
    const dispatch = useDispatch();
    // If the RecipeList is being rendered from the cookbook,
    //     grab the props from that the cookbook is passing down.
    // If the RecipeList ISN'T coming from the cookbook, then we 
    //     useSelector to get all of the recipes.
    const recipeList = parent === "cookbook" ? folder : useSelector(store => store.allRecipes.recipeList);
    const cookbook = useSelector(store => store.cookbook.cookbookRecipes);

    // Recipe.js does not use the "likedByUser" property,
    //     but we'll keep this function for now because it is setting state
    //     for the "recipes" variable
    const [recipes, setRecipes] = useState([]);
    const likedByUser = () => {
        newRecipeList = recipeList.map(rec => {
            const match = cookbook.find(({ id }) => id === rec.id);
            if (match) {
                rec.likedByUser = true;
            } else {
                rec.likedByUser = false;
            }
            return rec;
        });
        setRecipes(newRecipeList);
    };

    useEffect(() => {

        // Only call this action if the recipe is NOT coming
        //     from the cookbook
        if (!cookbook.length || parent !== "cookbook") {
            dispatch(fetchCookbook);
        }
        likedByUser();
    }, [cookbook, recipeList]);

    // TODO: Talk with backend - If we can get each recipe to have an
    //       extra property called "forkCount", we can pass the forkCount
    //       down to the <Recipe/> component. This could help the user see
    //       how many times a recipe has been forked '' '
    return (
        <ScrollView>
            <RecipeListContainer>
                {recipes.map(recp => (
                    <Recipe key={recp.id} recipe={recp} />
                ))}
            </RecipeListContainer>
        </ScrollView>
    );
};

export default RecipeList;
