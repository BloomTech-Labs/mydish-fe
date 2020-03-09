import { StyleSheet } from "react-native";
import theme from "../styles/theme.style";

const borderWidth = theme.INPUT_BORDER_WIDTH;
const borderColor = theme.INPUT_BORDER_COLOR;
const marginLeft = theme.MARGIN_SIDE_STANDARD;
const marginTop = 12;

const styles = StyleSheet.create({
    heading: {
        fontSize: theme.REGULAR_FONT_SIZE,
        fontWeight: "500",
        color: "#363838",
        marginTop: 12,
        marginBottom: 5,
        marginLeft: marginLeft,
        flexDirection: "row",
    },

    errors: {
        color: "red",
        fontWeight: "bold",
        marginTop: 30,
        marginLeft: 12,
    },
    editInstruction: {
        height: 76,
        padding: 10,
        borderWidth: 0.8,
        borderColor: "#363838",
        borderRadius: 4,
        marginLeft: 42,
        marginBottom: 20,
        marginRight: 14,
        marginTop: 10,
    },
    deleteButtonIngredient: {
        borderWidth: 0.8,
        borderColor: "#363838",
        borderRadius: 50,
        width: 24,
        height: 24,
        marginLeft: 14,
        alignContent: "center",
    },
    deleteRedLine: {
        borderTopWidth: 0.8,
        borderColor: "red",
        width: 15,
        marginTop: "50%",
        marginLeft: 3.3,
    },
    deleteButtonIngredient: {
        borderWidth: 0.8,
        borderColor: "#363838",
        borderRadius: 50,
        width: 24,
        height: 24,
        marginLeft: 14,
        alignContent: "center",
    },
    tagButtons: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        paddingRight: 19,
        paddingLeft: 19,
        marginBottom: 8,
        marginRight: 5,
        margin: 5,
        backgroundColor: "#959595",
    },
    tagButtonPressed: {
        backgroundColor: theme.HOVER_COLOR,
    },
    fontColorWhite: {
        color: "white",
    },
    baseText: {
        //   Recipe by:
        fontSize: 15,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
    },
    textInputStyles: {
        fontSize: 14,
        color: "#363838",
        marginBottom: 10,
        marginLeft: marginLeft,
    },
    RecipeNameContainer: {
        height: theme.INPUT_HEIGHT,
        borderRadius: 6,
        borderWidth: borderWidth,
        borderColor: borderColor,
        padding: 10,
        marginLeft: 14,
        marginRight: 14,
        marginBottom: 5,
    },
    totalTimeView: {
        flexDirection: "row",
    },
    timeInputContainer: {
        height: theme.INPUT_HEIGHT,
        width: 113,
        textAlign: "left",
        borderRadius: theme.INPUT_BORDER_RADIUS,
        borderWidth: borderWidth,
        borderColor: borderColor,
        paddingLeft: 12,
        marginLeft: marginLeft,
        marginRight: 14,
        marginBottom: 10,
    },
    notesContainer: {
        flexGrow: 1,
        minHeight: theme.INPUT_HEIGHT,
        padding: 12,
        borderWidth: theme.INPUT_BORDER_WIDTH,
        borderColor: theme.INPUT_BORDER_COLOR,
        borderRadius: theme.INPUT_BORDER_RADIUS,
        maxWidth: "90%",
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
    },
    dropdownText: {
        //    Text shown before clicking the dropdown
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "black",
        fontSize: 18,
        marginTop: 15,
    },
    dropdown: {
        //    Text shown in dropdown bar
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "black",
        fontSize: 15,
        marginTop: 15,
    },
    saveView: {
        alignItems: "center",
        marginTop: 30,
    },
    saveBtn: {
        width: 136,
        height: 32,
        marginBottom: 20,
        backgroundColor: theme.PRIMARY_COLOR,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    saveText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    doneText: { fontSize: 16, color: "#3BA405" },
    add: {
        fontSize: 16,
        color: "#363838",
        marginTop: 25,
        marginLeft: 14,
        marginBottom: 10,
    },
    tagGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 5,
    },
    fiftyFive: {
        alignSelf: "flex-end",
        color: "#363838",
        fontSize: 11,
        marginTop: 4,
        marginRight: 14,
    },
    missing: {
        color: "red",
        marginLeft: 4,
    },
    highlighted: {
        borderColor: theme.INPUT_BORDER_HIGHLIGHT_COLOR,
        borderWidth: theme.INPUT_BORDER_WIDTH,
    },
});

module.exports = styles;
