import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/individualRecipeStyles";

function TabIngredients({ text, toggleTab, color }) {
    // const [color, setColor] = useState({active: text})
    console.log("Tab rendered", text);

    // const tabsDisplay = cat => {
    //     console.log('category in tabsDisplay', cat);
    //     setColor({active: cat})
    //   }

    return (
        <TouchableOpacity onPress={() => toggleTab(text)}>
            <View
                style={
                    color.active.includes(text)
                        ? styles.titlesViewBorderIng
                        : styles.titlesViewBorderIngOff
                }
            >
                <Text
                    style={
                        color.active.includes(text)
                            ? styles.titlesColorWhite
                            : styles.titlesColorBlue
                    }
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default TabIngredients;
