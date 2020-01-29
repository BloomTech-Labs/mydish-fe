import React from "react";
import { TextInput } from "react-native";
import styles from "../styles/search.styles";

const Search = (props) => {
    const { dish, setDish } = props

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
