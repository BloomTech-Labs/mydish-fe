import { StyleSheet } from "react-native";
import theme from "./theme.style";

const styles = StyleSheet.create({
    versionView: {
        marginTop: 16,
    },
    label: {
        fontSize: 16,
        fontFamily: theme.REGULAR_FONT_FAMILY,
        color: theme.PRIMARY_COLOR,
    },
    authorComment: {
        ...theme.REGULAR_FONT,
    },
});

module.exports = styles;
