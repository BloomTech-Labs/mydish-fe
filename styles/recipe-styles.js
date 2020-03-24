import { StyleSheet } from "react-native";
import theme from "./theme.style";

module.exports = StyleSheet.create({
    recipeContainer: {
        width: "50%",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    cookbookContainer: {
        maxWidth: "100%",
        width: "100%",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    noRecipes: {
        padding: 20,
        marginTop: "50%",
        fontSize: 30,
        textAlign: "center",
    },
    text: {
        marginTop: "3%",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "left",
        width: "80%",
        maxWidth: "80%",
    },
    cookbookText: {
        marginLeft: 20,
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "left",
        width: "100%",
        maxWidth: "100%",
    },
    username: {
        fontSize: 11,
    },
    usercardTxt: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
        marginBottom: "2%",
    },
    prepView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    cookbookPrepView: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        width: "80%",
    },
    prep: {
        fontSize: 11,
    },
    centered: { flex: 1, justifyContent: "center", alignItems: "center" },
    heading: {
        fontSize: 24,
        fontFamily: theme.BOLD_FONT_FAMILY,
        color: theme.DARK_FONT_COLOR,
        marginVertical: 10,
    },
});
