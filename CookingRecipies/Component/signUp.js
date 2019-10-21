import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios'



const SignUp = () => {
    const [signUp, SetSignUp] = useState({username: '', password: ''})

    console.log(signUp)
    
    const onPress = () => {
     console.log("axios call goes here")
    //   axios.put('http://www.mocky.io/v2/5da8f1433100005b004e0679', signUp)
    //   .then(res => console.log('response from sign up axios post', res))
    //   .catch(err => console.log('error from sign up axios post',err))
    }
    
      return (
       
        <View style={styles.signUp}>
          <Text style={{color: "red"}}>Sign up</Text>
          <Text>Email</Text>
          <TextInput
           style={styles.inputFeilds}
           value={signUp.username}
           onChangeText={event => SetSignUp({...signUp, username:event})}/>
           <Text>Password</Text>
          <TextInput
           style={styles.inputFeilds}
           value={signUp.password}
           onChangeText={event => SetSignUp({...signUp, password:event})}/>
           <TouchableOpacity
             onPress={onPress}
             style={styles.signUpButton}
           >
             <Text>Sign up</Text>
           </TouchableOpacity>
        </View>
       
      );
    }
    
    const styles = StyleSheet.create({
     signUp: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center"
     },
     border:{
      borderLeftWidth: 1,
      borderRightWidth: 1, 
      borderTopWidth: 1,
      borderBottomWidth: 1,
     },
    inputFeilds: {
      height: 40,
      width: 300,  
      borderLeftWidth: 1,
      borderRightWidth: 1, 
      borderTopWidth: 1,
      borderBottomWidth: 1,
      marginBottom: 10, 
      marginTop: 10,
      paddingLeft: 15,
      paddingRight: 15
    },
    signUpButton: {
      borderLeftWidth: 1,
      borderRightWidth: 1, 
      borderTopWidth: 1,
      borderBottomWidth: 1,
      marginBottom: 10, 
      marginTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
      paddingTop: 10
    }
    
    });

export default SignUp;