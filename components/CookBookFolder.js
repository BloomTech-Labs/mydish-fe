import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import RecipeList from "./RecipeList";
import axiosWithAuth from "../utils/axiosWithAuth";
import styles from "../styles/recipe-styles";

const CookBookFolder = props => {
    const [folder, setFolder] = useState([]);
    const [loading, setLoading] = useState(false);
    const [children, setChildren] = useState([]);

    const course = props.navigation.getParam("Course", "params not passed");

    const grab = async () => {
        try {
            const courses = await axiosWithAuth().get(
                `cookbook?category=${course}`,
            );

            setFolder(courses.data);
            const { data } = await axiosWithAuth().get(`recipes/all`);
            const childrenRecipes = data.filter(rec => rec.ancestor);

            setChildren(childrenRecipes);
        } catch (err) {
            console.log("err in getting recipes by course", err);
        }
    };

    useEffect(() => {
        grab();
    }, []);

    return (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            {folder.length ? (
                <RecipeList
                    recipes={folder}
                    forks={children}
                    courseType={course}
                />
            ) : (
                <>
                    <Text style={styles.noRecipes}>
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
};

export default CookBookFolder;
