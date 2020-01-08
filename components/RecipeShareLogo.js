import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import RecipeShareStyle from "./StyledComponents/RecipeShareStyle";
import logo from "../assets/LogoGreen.png";
import styles from "../styles/search.styles";

function RecipeShareLogo() {
    return (
        <RecipeShareStyle>
            {/* <TouchableOpacity onPress={() => console.log('RecipeShareStyle clicked')}> */}
            <Image
                source={logo}
                style={{ width: 30, height: 30, marginLeft: 10 }}
                color='#3BA405'
            />
            <Text style={styles.title}>RecipeShare</Text>
            {/* </TouchableOpacity> */}
        </RecipeShareStyle>
    );
}

export default RecipeShareLogo;
