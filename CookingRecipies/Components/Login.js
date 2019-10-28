import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios'



const Login = () => {
const [login, SetLogin] = useState({username: '', password: ''})

console.log(login)

const onPress = () => {
 console.log("axios call goes here")
  // axios.put('', login)
  // .then(res => console.log('response from login axios post', res))
  // .catch(err => console.log('error from login axios post',err))
}

  return (
    <View style={styles.signUp}>
          <Text>Login</Text>
          <TextInput
           style={styles.inputFeilds}
           placeholder="Username"
           name="username"
           value={login.username}
           onChangeText={event => SetLogin({...login, username:event})}/>
          <TextInput
           style={styles.inputFeilds}
           placeholder="Password"
           name="password"
           value={login.password}
           onChangeText={event => SetLogin({...login, password:event})}/>
           <TouchableOpacity
             onPress={onPress}
             style={styles.signUpButton}
           >
             <Text>Login</Text>
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

export default Login;