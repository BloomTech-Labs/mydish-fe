import { StyleSheet } from "react-native";
import theme from "./theme.style";

module.exports = StyleSheet.create({
    container: {
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    input: {
        height: theme.INPUT_HEIGHT,
        paddingHorizontal: 10,
        borderWidth: theme.INPUT_BORDER_WIDTH,
        borderColor: theme.INPUT_BORDER_COLOR,
        borderRadius: theme.INPUT_BORDER_RADIUS,
        textAlign: "left",
        fontFamily: theme.INPUT_FONT_FAMILY,
    },
    quantity: { width: "20%" },
    units: { width: "30%" },
    name: { width: "40%", paddingBottom: 5 },
    highlighted: { borderColor: theme.INPUT_BORDER_HIGHLIGHT_COLOR },
});
