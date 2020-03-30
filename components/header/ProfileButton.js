import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, AsyncStorage } from "react-native";
import { profilePageToggle } from "../../store/navigation/navigationActions";
import { useSelector, useDispatch } from "react-redux";
import profileIcon from "../../assets/profile-icon.png";
import profileIconActive from "../../assets/profile-icon-red.png";

export default function ProfileButton() {
    const [hasToken, setHasToken] = useState();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.navigation.profileOpen);

    const _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem("userToken");
        userToken ? setHasToken(true) : setHasToken(false);
    };

    useEffect(() => {
        _bootstrapAsync();
    }, []);

    console.log();

    const togglePress = () => {
        dispatch(profilePageToggle(!profile));
    };
    return (
        <>
            {hasToken && (
                <TouchableOpacity
                    onPress={togglePress}
                    style={{ marginLeft: 20 }}
                >
                    {profile ? (
                        <Image source={profileIconActive} />
                    ) : (
                        <Image source={profileIcon} />
                    )}
                </TouchableOpacity>
            )}
        </>
    );
}
