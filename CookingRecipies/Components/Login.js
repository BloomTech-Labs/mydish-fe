import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles/loginStyles.js'



const Login = props => {
const [login, SetLogin] = useState({username: '', password: ''})

const signInAsync = async (tok) => {
  await AsyncStorage.setItem('userToken', tok);
  props.navigation.navigate('App');
  const token = await AsyncStorage.getItem('userToken')
  console.log(token)
};

console.log(login)

const onPress = () => {
  
 console.log("axios call goes here")
  axios.post('https://recipeshare-development.herokuapp.com/cooks/login', login)
  .then(res => signInAsync(res.data.token)
    // console.log('response from login axios post', res.data.token)
          )
  .catch(err => console.log('error from login axios post',err))
}

  return (
    <View style={styles.signUp}>
      <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          >
            <Text style={styles.exitButton}>x</Text>
          </TouchableOpacity>
          <Text style={styles.title}>RecipeShare</Text>
          <Text style={styles.explanationText}>Sign in or create a new account to save and edit your favorite recipes.</Text>
          <Text style={styles.loginText}>Log In</Text>
          <Text style={styles.emailText}>Email</Text>
          <TextInput
           style={styles.inputFeilds}
           name="username"
           value={login.username}
           onChangeText={event => SetLogin({...login, username:event})}/>
           <Text style={styles.passwordText}>Password</Text>
          <TextInput
           style={styles.inputFeilds}
           name="password"
           value={login.password}
           onChangeText={event => SetLogin({...login, password:event})}/>
           <TouchableOpacity
           onPress={() => props.navigation.navigate('SignUp')}>
           <Text style={styles.createAccountButton}>Create an Account</Text>
           </TouchableOpacity>
           <TouchableOpacity
             onPress={onPress}
             style={styles.loginButton}
           >
             <Text style={styles.loginButtonText}>Login</Text>
           </TouchableOpacity>
        </View>
       
      );
    }
    


export default Login;