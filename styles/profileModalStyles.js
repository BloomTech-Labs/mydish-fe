import { StyleSheet } from "react-native";
import theme from "../styles/theme.style";

const settings = {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
};

module.exports = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },
    setting: {
        marginBottom: 55,
    },
    text: {
        fontFamily: theme.REGULAR_FONT_FAMILY,
        fontSize: theme.MEDIUM_FONT_SIZE,
        color: theme.DARK_FONT_COLOR,
        fontWeight: theme.REGULAR_FONT_WEIGHT,
    },
    logout: {
        ...settings,
    },
    close: {
        ...settings,
    },
});
