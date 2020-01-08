import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ReactNativePickerModule from "react-native-picker-module";
import { addIngredient } from "../store/singleRecipe/singleRecipeActions";

const Picker = ({
    handleChange,
    ingredient,
    choices,
    visible,
    setAdding,
    setIngredient,
    setVisible,
}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (visible) {
            pickerRef.show();
        }
    }, [visible]);

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
                    onValueChange={(value, i) => {
                        console.log("VALUE", value);
                        handleChange("unit", value, i);
                    }}
                    onDismiss={() => {
                        dispatch(addIngredient(ingredient));
                        setIngredient({ name: "", quantity: null, unit: "" });
                        setAdding(false);
                        setVisible(false);
                    }}
                />
            </View>
        </TouchableOpacity>
    );
};

export default Picker;
