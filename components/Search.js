import React, { useState, useEffect } from "react";
import { TextInput } from "react-native";
import styles from "../styles/search.styles";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../store/recipes/recipeActions";

const Search = () => {
    const dispatch = useDispatch();
    let [dish, setDish] = useState("");

    useEffect(() => {
        dispatch(fetchRecipes(dish || ""));
    }, [dish]);

    return (
        <TextInput
            style={styles.textInput}
            placeholder="What dish are you looking for?"
            placeholderTextColor="#D3D3D3"
            value={dish}
            onChangeText={dish => setDish(dish)}
        />
    );
};

export default Search;
