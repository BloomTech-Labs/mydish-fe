import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import profile from "../../assets/profile-icon.png";

export default function ProfileButton() {
    return (
        <TouchableOpacity>
            <Image source={profile} />
        </TouchableOpacity>
    );
}
