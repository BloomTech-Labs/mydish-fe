import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Image
} from 'react-native';
import axios from 'axios'
// import AsyncStorage from '@react-native-community/async-storage'
// import MyCookBook from "./MyCookBook"
// import AxiosWithAuth from './AxiosWithAuth.js'
import styles from '../styles/loginStyles.js'
import logo from '../assets/LogoGreen.png';


export const wow=[]

export const temp = []

const Login = props => {
  const [login, SetLogin] = useState({username: '', password: ''})
  const [toke, setTok] = useState()

  const signInAsync = async (tok) => {
    await AsyncStorage.setItem('userToken', tok);
    props.navigation.navigate('App');
    const token = await AsyncStorage.getItem('userToken');
  };

 

  const onPress = () => {
    axios.post('https://recipeshare-development.herokuapp.com/cooks/login', login)
    .then(res => {signInAsync(res.data.token),  temp.push(res.data.token)})
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

          <View style = {{flexDirection: 'row', justifyContent: 'center', textAlign: 'center', paddingBottom: 15}}>
            <Image source={logo} style={{width: "10%", height: "105%"}}/> 
            <Text style={styles.title}>RecipeShare</Text>
          </View>
         
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
           onPress={() => props.navigation.navigate('SignUp')}>
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