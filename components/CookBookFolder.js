import React, { useEffect } from "react";
import { View, Text } from "react-native";
import RecipeList from "./RecipeList";
import styles from "../styles/recipe-styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchCookbook } from "../store/cookbook/cookbookAction";
import FancySpinner from "./FancySpinner";

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
                    <Text style={styles.noRecipes}>
                        You don't have any recipes in this section of your
                        Cookbook yet.
                    </Text>
                )}
            </View>
        );
    }
};

export default CookBookFolder;
