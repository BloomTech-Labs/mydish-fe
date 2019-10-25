import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    signUp: {
     flex: 1, 
     justifyContent: "center", 
     alignItems: 'center' 
    },
    title:{
        textAlign: "center",
       color: "#42C200",
       fontSize: 30,
       fontWeight: 'bold', 
       paddingBottom:100,
    },
    createAccountTitle: {
        fontSize: 18,
       fontWeight: '500',
       color: '#363838',
       marginBottom: 14,
       paddingRight: 190
    },
    inputFeilds: {
     height: 40,
     width: 327,  
     borderLeftWidth: 1,
     borderRightWidth: 1, 
     borderTopWidth: 1,
     borderBottomWidth: 1,
     borderColor: '#363838',
     marginBottom: 10, 
     marginTop: 10,
     paddingLeft: 15,
     paddingRight: 15,
     borderRadius: 4,
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
     marginLeft: 105
   },
   emailText: {
    paddingRight: 283,
     color: '#363838',
  
    },
    passwordText: {
      paddingRight: 256,
       color: '#363838',
    
      },
   createAccountText: {
       textAlign: "center",
       color: "white",
       fontSize: 16,
       fontWeight: 'bold',
   }
   
   });

   module.exports = styles;