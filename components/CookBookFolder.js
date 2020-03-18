import React, { useEffect } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import RecipeList from "./RecipeList";
import styles from "../styles/recipe-styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchCookbook } from "../store/cookbook/cookbookAction";

const CookBookFolder = props => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.cookbook.isLoading);
    const folder = useSelector(state => state.cookbook.cookbookRecipes);
    const course = props.navigation.getParam("Course", "params not passed");

    useEffect(() => {
        dispatch(fetchCookbook(course));
    }, [dispatch, fetchCookbook, course]);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            </View>
        );
    } else {
        return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                {folder.length ? (
                    <RecipeList
                        folder={folder}
                        parent="cookbook" />
                ) : (
                        <>
                            <Text
                                style={styles.noRecipes}>
                                You have no saved recipes in this section of your
                                Cookbook!
                        </Text>
                            <Button
                                title="<- Back To My Cookbook"
                                onPress={() => props.navigation.pop()}
                            />
                        </>
                    )}
            </View>
        );
    }
};

export default CookBookFolder;
