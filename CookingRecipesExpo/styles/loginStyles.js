
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    signUp: {
       
       },
       title:{
           textAlign: "center",
          color: "#42C200",
          fontSize: 30,
          fontWeight: 'bold', 
          // paddingBottom:14,
          paddingTop: 13, 
          paddingLeft: 10
       },
       explanationText: {
        textAlign: 'left',
        color: '#363838',
       marginLeft: 16,
        fontSize: 16,
        marginBottom: 29,
       },
       loginText: {
        textAlign: 'left',
        color: '#363838',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 16,
        marginLeft: 16
       },
       createAccountButton: {
          fontSize: 14,
          fontWeight: '500',
          color: '#047396',
          marginLeft: 16
       },
       inputFeilds: {
          height: 40,
          marginLeft: 16,
          marginRight: 16,
          marginBottom: 10, 
          marginTop: 10,
          paddingLeft: 3,
          minHeight: '5%',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#d6d7da'
      },
      loginButton: {
        justifyContent: 'center',
        marginBottom: 10, 
        width: 120,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#3BA405',
        paddingTop: 10,
        marginTop: 31,
        marginRight: 16,
      },
      emailText: {
       color: '#363838',
       marginLeft: 16
    
      },
      passwordText: {
         color: '#363838',
         marginLeft: 16
        },
      loginButtonText: {
          textAlign: "center",
          color: "white",
          fontSize: 16,
          fontWeight: 'bold',
          paddingBottom: 10,
      },
      exitButton: {
        fontSize: 20,
        fontWeight: '500',
        color: '#047396',
        paddingBottom:50,
        alignSelf: 'flex-end',
    marginRight: 14
       }
   
   });

   module.exports = styles;