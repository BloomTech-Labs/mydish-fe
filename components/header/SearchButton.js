import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { searchHomepage } from "../../store/navigation/navigationActions";
import searchIcon from "../../assets/search-icon.png";

export default function SearchButton(props) {
    const dispatch = useDispatch();
    const search = useSelector(state => state.navigation.search);

    const togglePress = () => {
        if (props.homepage) {
            dispatch(searchHomepage(!search.homepage));
        }
    };

    return (
        <TouchableOpacity onPress={togglePress} style={{ marginRight: 20 }}>
            <Image source={searchIcon} />
        </TouchableOpacity>
    );
}
