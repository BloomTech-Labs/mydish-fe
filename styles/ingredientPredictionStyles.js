import { StyleSheet } from "react-native";
import theme from "./theme.style";

module.exports = StyleSheet.create({
    headText: {
        color: theme.DARK_GREY_FONT_COLOR,
        marginTop: 20,
        marginBottom: 5,
        fontSize: theme.REGULAR_FONT_SIZE,
        fontFamily: theme.REGULAR_FONT_FAMILY,
    },
    ingredientText: {
        color: theme.DARK_FONT_COLOR,
        fontSize: theme.REGULAR_FONT_SIZE,
        fontFamily: theme.REGULAR_FONT_FAMILY,
    },
});
