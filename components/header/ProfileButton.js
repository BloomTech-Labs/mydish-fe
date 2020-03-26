import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { profilePageToggle } from "../../store/navigation/navigationActions";
import { useSelector, useDispatch } from "react-redux";
import profileIcon from "../../assets/profile-icon.png";
import profileIconActive from "../../assets/profile-icon-red.png";

export default function ProfileButton() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.navigation.profileOpen);

    const togglePress = () => {
        dispatch(profilePageToggle(!profile));
    };
    return (
        <TouchableOpacity onPress={togglePress} style={{ marginLeft: 20 }}>
            {profile ? (
                <Image source={profileIconActive} />
            ) : (
                <Image source={profileIcon} />
            )}
        </TouchableOpacity>
    );
}
