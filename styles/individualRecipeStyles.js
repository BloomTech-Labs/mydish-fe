import { StyleSheet } from "react-native";
import theme from "./theme.style";

const styles = StyleSheet.create({
    recipeContainer: {
        marginBottom: 200,
    },
    titleWrapper: {
        backgroundColor: "#8FCC70",
    },
    titleContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: theme.LARGE_FONT_SIZE,
        color: theme.DARK_GREY_FONT_COLOR,
        fontFamily: theme.BOLD_FONT_FAMILY,
        marginTop: 32,
    },
    underTitleRow: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
    },
    tagAndVersionsRow: {
        alignItems: "flex-start",
        marginTop: 14,
    },
    tagBox: {
        flexDirection: "row",
        width: 199,
        flexWrap: "wrap",
    },
    recipeContentContainer: {
        marginHorizontal: 16,
    },
    versions: {
        color: theme.PRIMARY_COLOR,
        textDecorationLine: "underline",
        fontFamily: theme.REGULAR_FONT_FAMILY,
        fontSize: theme.SMALL_FONT_SIZE,
    },
    timeContainer: {
        flexDirection: "row",
    },
    ingredients: {
        alignItems: "center",
        flexDirection: "row",
    },
    tabsContainer: {
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
    },
    tabsTouchable: {
        width: "50%",
    },
    showTab: {
        paddingVertical: 8,
        backgroundColor: theme.PRIMARY_COLOR,
        borderBottomWidth: 1,
        borderBottomColor: theme.GREY_FONT_COLOR,
    },
    hideTab: {
        paddingVertical: 8,
        backgroundColor: theme.NAV_BAR_BACKGROUND_COLOR,
        borderBottomWidth: 1,
        borderBottomColor: theme.PRIMARY_COLOR,
    },
    tabTextActive: {
        textAlign: "center",
        color: theme.WHITE_FONT_COLOR,
        fontFamily: theme.BOLD_FONT_FAMILY,
    },
    tabTextInactive: {
        textAlign: "center",
        color: theme.DARK_FONT_COLOR,
        fontFamily: theme.BOLD_FONT_FAMILY,
    },
    recipeDetails: {
        marginVertical: 15,
    },
    authorName: {
        ...theme.REGULAR_FONT,
        fontSize: theme.SMALL_FONT_SIZE,
    },
    recipeFieldsList: {
        marginVertical: 10,
    },
    recipeFieldsText: {
        ...theme.REGULAR_FONT,
        color: theme.DARK_FONT_COLOR,
    },
    ingredientView: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    stepText: {
        color: "#1E1F20",
        width: "90%",
        fontSize: 16,
    },

    stepTextView: {
        backgroundColor: "#F4F8FA",
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 14,
        marginRight: 14,
        flexDirection: "row",
        alignItems: "center",
    },
    details: {
        alignItems: "center",
    },
    notes: {
        fontSize: theme.REGULAR_FONT_SIZE,
        fontFamily: theme.BOLD_FONT_FAMILY,
        color: theme.DARK_FONT_COLOR,
        marginTop: 20,
    },
    redBorder: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: theme.PRIMARY_COLOR,
    },
    hidden: {
        display: "none",
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
        flexDirection: "row",
    },
    imageContainer: {
        borderRadius: 5,
    },
    editButton: {
        backgroundColor: theme.PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        width: 113,
        height: 28,
        borderRadius: 5,
    },
    editText: {
        color: theme.WHITE_FONT_COLOR,
        fontFamily: theme.BOLD_FONT_FAMILY,
        fontSize: theme.REGULAR_FONT_SIZE,
    },
    deleteButton: {
        backgroundColor: "#C00000",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        width: 35,
        height: 35,
        margin: 10,
        marginLeft: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8FCC70",
        width: 25,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: 150,
        height: "100%",
        marginRight: 16,
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "30%",
        height: "100%",
    },
    ingredientContainer: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    swipeableContainer: {
        width: "95%",
    },
    instructionInput: {
        width: "90%",
        fontSize: 16,
        marginLeft: 5,
    },
    swipeable: {
        flexDirection: "row",
    },
    centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

module.exports = styles;
