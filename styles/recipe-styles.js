import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    recipeContainer: {
        width: "50%",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    noRecipes: {
        padding: 20,
        marginTop: "50%",
        fontSize: 30,
        textAlign: "center",
    },
    modalOuter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
    },
    modalInner: {
        alignItems: "center",
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 40,
        borderColor: "#8FCC70",
    },
    text: {
        marginTop: "3%",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "left",
        width: "80%",
    },
    username: {
        fontSize: 11,
    },
    usercardTxt: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
        marginBottom: "2%",
        // marginLeft : 5
        // borderTopWidth: 5,
        // borderBottomWidth: 5
    },
    prepView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
    },
    prep: {
        fontSize: 11,
    },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }

});
