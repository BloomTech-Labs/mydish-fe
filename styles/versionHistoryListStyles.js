import { StyleSheet } from "react-native";
import theme from "./theme.style";

const styles = StyleSheet.create({
    versionView: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        margin: 15,
        paddingVertical: 4,
        paddingHorizontal: 2,
    },
    label: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: "bold",
    },
    commentLabel: {
        fontWeight: "bold",
    },
});

module.exports = styles;
