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
        maxWidth: "100%",
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
    editprofile: {
        ...settings,
        justifyContent: "center",
        alignContent: "center",
    },
    logout: {
        ...settings,
    },
    close: {
        ...settings,
    },

    InputField: {
        marginVertical: 35,
    },
    content: {
        padding: 30,
    },
    button: {
        fontSize: 24,
    },
    modal: {
        width: "100%",
    },
});
