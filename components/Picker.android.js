import React from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default Picker = ({ handleChange, ingredient }) => {
    const placeholder = {
        label: "unit",
    };

    return (
        //         <TouchableOpacity
        // style={{ height: 40, width: "19%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%",  }}>
        // <View style={{alignItems: "center", paddingTop: '15%'}} >
        // <Text style={ ingredient.unit === '' ? {color: "#C7C7CD"} : ''}>{ingredient.unit !== '' ? ingredient.unit : "Unit"}</Text>
        <RNPickerSelect
            placeholder={placeholder}
            onValueChange={value => handleChange("unit", value)}
            value={ingredient.unit}
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            items={[
                { label: "tsp", value: "tsp" },
                { label: "tbsp", value: "tbsp" },
                { label: "cup", value: "cup" },
                { label: "g", value: "g" },
                { label: "mg", value: "mg" },
                { label: "oz", value: "oz" },
                { label: "pinch", value: "pinch" },
                { label: "L", value: "L" },
                { label: "ml", value: "ml" },
                { label: "can", value: "can" },
                { label: "whole", value: "whole" },
                { label: "pint", value: "pint" },
                { label: "package", value: "package" },
                { label: "lbs", value: "lbs" },
            ]}
        />
    );
    // </View>
    // </TouchableOpacity>)
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30, // to ensure the text is never behind the icon
    },

    inputAndroid: {
        height: 40,
        // width: "19%",
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.8,
        borderColor: "#363838",
        borderRadius: 4,
        textAlign: "center",
        color: "black",
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

//style={{ height: 40, width: "19%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: 14 }}
