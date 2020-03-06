import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import x_delete from "../assets/x_red_delete.png";

const XDeleteButton = ({ action }) => {
    return (
        <TouchableOpacity onPress={action}>
            <Image style={{ width: 22, height: 22 }} source={x_delete} />
        </TouchableOpacity>
    );
};

export default XDeleteButton;
