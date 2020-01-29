import React, { useState, useEffect } from "react";
import { TextInput } from "react-native";
import styles from "../styles/search.styles";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../store/recipes/recipeActions";

const Search = (props) => {
    const { dish } = props
    const dispatch = useDispatch();
    // let [dish, setDish] = useState("");

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         dispatch(fetchRecipes(dish));
    //     }, 600);

    //     return () => clearTimeout(timer);
    // }, [dish]);

    return (
        <TextInput
            style={styles.textInput}
            placeholder="What dish are you looking for?"
            placeholderTextColor="#D3D3D3"
            value={dish}
            onChangeText={text => setDish(text)}
        />
    );
};

export default Search;
