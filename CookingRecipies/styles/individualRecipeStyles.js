import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#363838',
        fontWeight: 'bold', 
       // marginTop: 8,
        marginBottom: 12,
        marginLeft: 14,
        //textAlign: 'center'
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 30,
        paddingLeft: 14,
        borderBottomWidth: 0.3,
        borderBottomColor: '#6B6F70',
        paddingBottom: 10,
        marginBottom: 10
    },
    likes: {
        flexDirection: 'row',
        //borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        borderTopColor: '#6B6F70',
        borderBottomColor: '#6B6F70',
        paddingBottom: 25,
        paddingTop: 25,
        marginBottom: 16,
        justifyContent: 'space-around'
    },
    likeView: {
        flexDirection: 'row'
    },
    tags: {
        fontSize: 14,
        color: '#363838',
        fontWeight: '500',
        marginLeft: 17,
        marginBottom: 8,
        // borderTopWidth: 0.3,
        // borderTopColor: '#6B6F70',
    },
    individualTags: {
        fontSize: 14,
        color: '#363838',
        fontWeight: '500',
    },
    tagBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        borderBottomWidth: 0.3,
        borderBottomColor: '#6B6F70',
        paddingBottom: 18
    },
    editButton: {
        width: 25,
        height: 25,
        marginLeft: 30,
        marginBottom: 5
    },
    editButtonView: {
        backgroundColor: '#8FCC70',
        borderRadius: 50,
        width: 88,
        marginBottom: 15,
    },
    editView: {
        paddingLeft: 300,
        marginTop: 20,
        alignContent: 'center'
    },
    ingredients: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    titlesColorWhite: {
        textAlign: 'center',
         color: 'white',
         fontWeight: 'bold',
    },
    titlesColorBlue: {
        textAlign: 'center',
         color: '#047396',
         fontWeight: 'bold'
    },
    titlesViewBorderIng:{
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#047396',
        width: '100%',
        marginRight: '30%'
    },
    titlesViewBorderIngOff:{
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        width: '100%',
        marginRight: '30%'
    },
    titlesViewBorderInst:{
        paddingTop: 10,
        paddingBottom: 10,
        width: '250%',
    },
    titlesViewBorderInstOn:{
        paddingTop: 10,
        paddingBottom: 10,
        width: '250%',
        backgroundColor: '#047396',
    },
    ingredientList: {
      backgroundColor: '#F4F8FA',
      paddingTop: 9,
      paddingBottom: 9,
      marginTop: 10,
      marginBottom: 20,
      flexDirection: 'row-reverse',
      width: 343,
      justifyContent: 'space-around',
      paddingRight: 10,
    },
    ingredientText: {
        color: '#1E1F20' ,
        fontSize: 16,
    },
    ingredientView: {
        width: '50%'
    },
    stepText: {
        color: '#1E1F20' ,
        fontSize: 14,
    }, 
    stepTextView: {
      backgroundColor: '#F4F8FA',
      paddingTop: 9,
      paddingBottom: 9,
      marginTop: 10,
      marginBottom: 20,
      width: 343,
    },
    details:{
        alignItems: 'center'
    },
    notes: {
        paddingRight: 300,
        fontSize: 14,
       fontWeight: '500'
    },
    hidden: {
        display: 'none'
    }
})

module.exports = styles