import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/individualRecipeStyles";

function TabInstructions({ text, toggleTab, color }) {
    // const [color, setColor] = useState({active: text})

    // const tabsDisplay = cat => {
    //     console.log('category in tabsDisplay', cat);
    //     setColor({active: cat})
    //   }

    return (
        <TouchableOpacity onPress={() => toggleTab(text)}>
            <View
                style={
                    color.active.includes(text)
                        ? styles.titlesViewBorderInstOn
                        : styles.titlesViewBorderInst
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

export default TabInstructions;
