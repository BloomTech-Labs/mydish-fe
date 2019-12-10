import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";

const Picker = ({ handleChange, ingredient, choices }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                pickerRef.show();
            }}
            style={{
                height: 40,
                width: "19%",
                borderWidth: 0.8,
                borderColor: "#363838",
                borderRadius: 4,
                textAlign: "center",
                marginLeft: "3%",
            }}
        >
            <View style={{ alignItems: "center", paddingTop: "15%" }}>
                <Text
                    style={ingredient.unit === "" ? { color: "#C7C7CD" } : ""}
                >
                    {ingredient.unit !== "" ? ingredient.unit : "Unit"}
                </Text>
                <ReactNativePickerModule
                    pickerRef={e => (pickerRef = e)}
                    selectedValue={choices.selectedValue}
                    title={"Select a unit"}
                    items={choices.data}
                    onValueChange={(value, i) => handleChange("unit", value, i)}
                />
            </View>
        </TouchableOpacity>
    );
};

export default Picker;
