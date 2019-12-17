import React, { useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    Button,
    StyleSheet,
    Text,
    ScrollView,
    Image,
} from "react-native";
import logo from "../assets/LogoGreen.png";
import RecipeList from "./RecipeList.js";
// import RecipeShareLogo from './StyledComponents/RecipeShareLogo';
import RecipeShareLogo from "./RecipeShareLogo";
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
