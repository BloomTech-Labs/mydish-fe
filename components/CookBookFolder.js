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
        // console.log('course in grab', course);
        const axiosAuth = await axiosWithAuth();
        try {
            const courses = await axiosAuth.get(
                `https://recipeshare-development.herokuapp.com/cookbook?category=${course}`,
            );
            // console.log('res.data recipes by course', courses.data);
            setFolder(courses.data);
            const { data } = await axiosAuth.get(
                `https://recipeshare-development.herokuapp.com/recipes/all`,
            );
            const childrenRecipes = data.filter(rec => rec.ancestor);
            console.log(
                "children with an ancestor in <CookBookFolder>",
                childrenRecipes,
            );
            setChildren(childrenRecipes);
        } catch (err) {
            console.log("err in getting recipes by course", err);
        }

        //       .then(res => {
        //           setFolder(res.data);
        //    })
        //       .catch(err => console.log(err));
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
