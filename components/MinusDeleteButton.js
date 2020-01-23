import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

const MinusDeleteButton = ({ action, parent }) => {
    const marginStyling =
        parent === "ingredient"
            ? { marginTop: 10 }
            : parent === "note"
            ? { marginTop: 0 }
            : { marginLeft: 5, marginTop: 15 };
    return (
        <TouchableOpacity onPress={action}>
            <View
                style={{
                    backgroundColor: "#C00000",
                    borderRadius: 100 / 2,
                    width: 20,
                    height: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    ...marginStyling,
                }}
            >
                <Text
                    style={{
                        color: "#FFFFFF",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    –
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MinusDeleteButton;
