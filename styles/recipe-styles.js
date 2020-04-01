import { StyleSheet } from "react-native";
import theme from "./theme.style";

module.exports = StyleSheet.create({
    cookbookHeadText: {
        fontFamily: theme.BOLD_FONT_FAMILY,
        fontSize: theme.LARGE_FONT_SIZE,
        color: theme.DARK_GREY_FONT_COLOR,
        marginTop: 19,
    },
    recipeContainer: {
        width: "50%",
        padding: 5,
    },
    cookbookContainer: {
        maxWidth: "100%",
        width: "100%",
        padding: 5,
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    noRecipes: {
        fontSize: theme.LARGE_FONT_SIZE,
        color: theme.DARK_FONT_COLOR,
        fontFamily: theme.REGULAR_FONT_FAMILY,
        paddingHorizontal: 20,
        marginTop: "50%",
        marginBottom: 20,
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
    addRecipeButton: {
        ...theme.PRIMARY_BUTTON,
    },
    addRecipeButtonText: {
        ...theme.PRIMARY_BUTTON_TEXT,
    },
    noRecipeCookbookContainer: {
        alignItems: "center",
    },
    centered: { flex: 1, justifyContent: "center", alignItems: "center" },
    heading: {
        fontSize: 24,
        fontFamily: theme.BOLD_FONT_FAMILY,
        color: theme.DARK_FONT_COLOR,
        marginVertical: 10,
    },
});
