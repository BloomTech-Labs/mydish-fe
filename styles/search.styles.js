import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    // logo: {
    //     alignSelf: 'center',
    //     textAlign: 'center',

    // },
    title: {
        textAlign: "center",
        color: "#42C200",
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 15,
        textAlignVertical: 'center'
    },
    textInput: {
        height: 40,
        fontSize: 18,
        margin: 7,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 3,
        minHeight: '5%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da'
    },
    button: {
        borderRadius: 4,
        borderWidth: 2,
        marginLeft: 100,
        marginRight: 100,
        borderColor: '#3BA405',
        backgroundColor: `#3BA405`
    }
})