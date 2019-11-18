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
      paddingTop: 5, 
      paddingLeft: 10
    },
    createAccountTitle: {
      textAlign: 'left',
      color: '#363838',
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 14,
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
   createAccountButton: {
     marginBottom: 10, 
     marginTop: 10,
     width: 217,
     height: 40,
     borderRadius: 50,
     backgroundColor: '#3BA405',
     paddingTop: 10,
     marginTop: 42,
     marginRight: 16
   },
   emailText: {
    marginLeft: 16,
     color: '#363838',
  
    },
    passwordText: {
      marginLeft: 16,
       color: '#363838',
    
      },
   createAccountText: {
       textAlign: "center",
       color: "white",
       fontSize: 16,
       fontWeight: 'bold',
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