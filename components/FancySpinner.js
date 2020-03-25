import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "../styles/recipe-styles";

const FancySpinner = () => {
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
};

export default FancySpinner;
