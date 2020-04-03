import { StyleSheet } from "react-native";
import theme from "./theme.style";

const headerIcon = {
    resizeMode: "contain",
    height: 19,
};

module.exports = StyleSheet.create({
    rightButton: {
        marginRight: 19,
    },
    searchIcon: {
        ...headerIcon,
    },
});
