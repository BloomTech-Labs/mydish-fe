import React from "react";
import RNPickerSelect from "react-native-picker-select";

export default Picker = ({
    handleChange,
    unit,
    highlighted,
    onClose,
}) => {
    const placeholder = {
        label: "unit",
    };

    const styleObj = {
        fontSize: 16,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: highlighted.unit ? 1 : 0.8,
        borderColor: highlighted.unit ? "#FF0000" : "#363838",
        borderRadius: 4,
        color: "black",
        paddingRight: 30, // to ensure the text is never behind the icon
    };

    return (
        <RNPickerSelect
            onClose={onClose}
            placeholder={placeholder}
            onValueChange={value => handleChange("units", value)}
            value={unit}
            useNativeAndroidPickerStyle={false}
            style={{
                inputIOS: styleObj,
                inputAndroid: styleObj,
            }}
            items={[
                { label: "tsp", value: "teaspoon" },
                { label: "tbsp", value: "tablespoon" },
                { label: "cup", value: "cup" },
                { label: "g", value: "gram" },
                { label: "kg", value: "kilogram" },
                { label: "mg", value: "milligram" },
                { label: "oz", value: "ounce" },
                { label: "pinch", value: "pinch" },
                { label: "L", value: "liter" },
                { label: "mL", value: "milliliter" },
                { label: "can", value: "can" },
                { label: "whole", value: "whole" },
                { label: "pint", value: "pint" },
                { label: "package", value: "package" },
                { label: "lbs", value: "lbs" },
            ]}
        />
    );
};
