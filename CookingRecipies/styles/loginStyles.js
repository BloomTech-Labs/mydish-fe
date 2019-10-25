
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
          paddingBottom:14,
       },
       explanationText: {
        textAlign: 'left',
        color: '#363838',
        //textAlign: "center",
        // marginLeft: 60,
        width:296,
        fontSize: 16,
        marginBottom: 29,
       },
       loginText: {
        textAlign: 'left',
        color: '#363838',
        fontSize: 18,
        fontWeight: '500',
        paddingRight: 270,
        marginBottom: 16
       },
       createAccountButton: {
           fontSize: 14,
          fontWeight: '500',
          color: '#047396',
         paddingRight: 200,
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
        // marginLeft: 16,
      },
      loginButton: {
        marginBottom: 10, 
        marginTop: 10,
        width: 120,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#3BA405',
        paddingTop: 10,
        marginLeft: 205,
        marginTop: 31
      },
      emailText: {
      paddingRight: 283,
       color: '#363838',
    
      },
      passwordText: {
        paddingRight: 256,
         color: '#363838',
      
        },
      loginButtonText: {
          textAlign: "center",
          color: "white",
          fontSize: 16,
          fontWeight: 'bold',
      }
   
   });

   module.exports = styles;