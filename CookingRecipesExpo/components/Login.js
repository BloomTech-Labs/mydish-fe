import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';
import axios from 'axios'
// import AsyncStorage from '@react-native-community/async-storage'
// import MyCookBook from "./MyCookBook"
// import AxiosWithAuth from './AxiosWithAuth.js'
import styles from '../styles/loginStyles.js'
import MyCookBook from "./MyCookBook.js"



const Login = props => {
  const [login, SetLogin] = useState({username: '', password: ''})
  const [toke, setTok] = useState()

  const signInAsync = async (tok) => {
    await AsyncStorage.setItem('userToken', tok);
    props.navigation.navigate('App');
    const token = await AsyncStorage.getItem('userToken');
  };

//  useEffect(()=>{
//    <MyCookBook name={login.username}/>
//  },[login.username])

  const onPress = () => {
    axios.post('https://recipeshare-development.herokuapp.com/cooks/login', login)
    .then(res => {signInAsync(res.data.token),  console.log(res.data)})
      // console.log('response from login axios post', res.data.token)
    .catch(err => setTok(err))
    } 

    //console.log("tiktok",toke)
  return (
    <ScrollView>
    <View style={styles.signUp}>
      <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          >
            <Text style={styles.exitButton}>x</Text>
          </TouchableOpacity>
          <Text style={styles.title}>RecipeShare</Text>
          <Text style={styles.explanationText}>Sign in or create a new account to save and edit your favorite recipes.</Text>
          <Text style={styles.loginText}>Log In</Text>
          <Text style={styles.emailText}>Username</Text>
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
           onChangeText={event => SetLogin({...login, password:event})}
           secureTextEntry={true}/>
           {toke!=null && <Text style={{color:"red", marginLeft:100}}>Incorrect Username or Password</Text>}
           <TouchableOpacity
           onPress={() => props.navigation.navigate('Signup')}>
           <Text style={styles.createAccountButton}>Create an Account</Text>
           </TouchableOpacity>
           <View style={{flexDirection: 'row-reverse', marginRight: 16}}>
           <TouchableOpacity
             onPress={onPress}
             style={styles.loginButton}
           >
             <Text style={styles.loginButtonText}>Login</Text>
             {/* <MyCookBook props={toke} style={{display: 'none'}}/> */}
             {/* <AxiosWithAuth token={toke}/> */}
           </TouchableOpacity>
           </View>
        </View>
       </ScrollView>
       
      );
    }
    


export default Login;