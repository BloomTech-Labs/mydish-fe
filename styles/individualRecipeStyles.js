import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "#363838",
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 12,
        marginLeft: 14,
        //textAlign: 'center'
    },
    icon: { width: 20, height: 20, marginRight: 5 },
    innovatorTime: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 30,
        paddingLeft: 14,
        borderBottomWidth: 0.3,
        borderBottomColor: "#6B6F70",
        paddingBottom: 10,
        marginBottom: 10,
    },
    // likes: {
    //     flexDirection: 'row',
    //     //borderTopWidth: 0.3,
    //     borderBottomWidth: 0.3,
    //     borderTopColor: '#6B6F70',
    //     borderBottomColor: '#6B6F70',
    //     paddingBottom: 25,
    //     paddingTop: 25,
    //     marginBottom: 16,
    //     justifyContent: 'space-around'
    // },
    likeView: {
        flexDirection: "row",
    },
    tags: {
        fontSize: 14,
        color: "#363838",
        fontWeight: "500",
        marginLeft: 13,
        marginBottom: 8,
        // borderTopWidth: 0.3,
        // borderTopColor: '#6B6F70',
    },
    individualTags: {
        fontSize: 14,
        color: "#363838",
        fontWeight: "500",
    },
    tagBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingBottom: 16.5,
        marginLeft: 14,
        marginRight: 14,
    },
    editButton: {
        width: 25,
        height: 25,
        marginLeft: 5,
        marginTop: 4.5,
    },
    editButtonView: {
        backgroundColor: "#8FCC70",
        borderRadius: 50,
        width: 48,
        height: 48,
        padding: 6,
        marginBottom: 15,
        marginLeft: 14,
        marginTop: 15,
    },
    editView: {
        paddingLeft: 300,
        marginTop: 20,
        alignContent: "center",
    },
    ingredients: {
        alignItems: "center",
        flexDirection: "row",
    },
    showTab: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#047396",
        paddingLeft: "16.5%",
        paddingRight: "16.5%",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    hideTab: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "white",
        paddingLeft: "16.5%",
        paddingRight: "16.5%",
        color: "#047396",
        fontWeight: "bold",
    },

    tabTextWhite: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    tabTextBlue: {
        textAlign: "center",
        color: "#047396",
        fontWeight: "bold",
    },

    titlesViewBorderIng: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#047396",
        paddingLeft: "16.5%",
        paddingRight: "16.5%",
        //width: '100%',
        //marginRight: '30%'
    },
    titlesViewBorderIngOff: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "white",
        paddingLeft: "16.5%",
        paddingRight: "16.5%",
    },
    titlesViewBorderInst: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: "16.5%",
        paddingRight: "16.5%",
    },
    titlesViewBorderInstOn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: "16.5%",
        paddingRight: "16.5%",
        backgroundColor: "#047396",
    },
    ingredientList: {
        backgroundColor: "#F4F8FA",
        paddingTop: 9,
        paddingBottom: 9,
        marginTop: 10,
        marginBottom: 20,
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        paddingRight: 10,
        marginLeft: 14,
        marginRight: 14,
    },
    ingredientText: {
        color: "#1E1F20",
        fontSize: 16,
    },
    ingredientView: {
        width: "50%",
        // height: 50,

        // borderColor: "blue",
        // borderWidth: 1,
    },
    stepText: {
        color: "#1E1F20",
        fontSize: 16,
    },
    stepTextView: {
        backgroundColor: "#F4F8FA",
        paddingLeft: 5,
        paddingTop: 9,
        paddingBottom: 9,
        marginTop: 10,
        marginBottom: 20,
        width: "90%",
    },
    details: {
        alignItems: "center",
    },
    notes: {
        marginLeft: 14,
        fontSize: 14,
        fontWeight: "500",
    },
    hidden: {
        display: "none",
    },
    placeholder: { width: "100%", height: 345 },
    editButton: {
        backgroundColor: "#76A21E",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 30,
    },
    deleteButton: {
        backgroundColor: "#C00000",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 30,
    },

    titleContainer: {
        backgroundColor: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "30%",
        height: 40,
    },
    ingredientContainer: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    swipeableContainer: {
        width: "95%",
        // borderColor: "pink",
        // borderWidth: 2,
    },
    instructionInput: {
        width: "90%",
    },
});

module.exports = styles;
