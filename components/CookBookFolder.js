import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { fetchCookbook } from "../store/cookbook/cookbookAction";
import styles from "../styles/recipe-styles";
import FancySpinner from "./FancySpinner";
import RecipeList from "./RecipeList";
import AddRecipeButton from "./AddRecipeButton";

const CookBookFolder = props => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.cookbook.isLoading);
    const folder = useSelector(state => state.cookbook.cookbookRecipes);
    const course = props.navigation.getParam("Course", "params not passed");

    useEffect(() => {
        dispatch(fetchCookbook(course));
    }, [dispatch, fetchCookbook, course]);

    if (loading) {
        return <FancySpinner />;
    } else {
        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginHorizontal: 16,
                    marginVertical: 5,
                }}
            >
                {folder.length ? (
                    <RecipeList folder={folder} parent="cookbook" />
                ) : (
                    <View style={styles.noRecipeCookbookContainer}>
                        <Text style={styles.noRecipes}>
                            You don't have any recipes in this section of your
                            Cookbook yet.
                        </Text>
                        <AddRecipeButton navigation={props.navigation} />
                    </View>
                )}
            </View>
        );
    }
};

export default CookBookFolder;
