import { StyleSheet } from "react-native";
import theme from "./theme.style";

const styles = StyleSheet.create({
    versionView: {
        marginVertical: 16,
        paddingVertical: 4,
    },
    label: {
        fontSize: 16,
        fontFamily: theme.REGULAR_FONT_FAMILY,
        color: theme.PRIMARY_COLOR,
    },
    commentLabel: {
        fontWeight: "bold",
    },
});

module.exports = styles;
