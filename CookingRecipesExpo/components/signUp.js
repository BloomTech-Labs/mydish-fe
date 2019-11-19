import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  AsyncStorage,
  Image
} from 'react-native';
import axios from 'axios'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from '../styles/signUpStyles.js'

import logo from '../assets/LogoGreen.png';


const SignUp = props => {
    const [signUp, SetSignUp] = useState({username: '', password: ''})
    const [err, setErr] = useState()

    console.log(signUp)
    
    
    const onPress = async () => {
      await axios.post('https://recipeshare-development.herokuapp.com/cooks/register', signUp)
      .then(res => console.log('response from sign up axios post', res))
      .catch(err => setErr(err))

      props.navigation.navigate('Login')
    }
    
      return (

       <KeyboardAwareScrollView>
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
          
          <Text style={styles.createAccountTitle}>Create Account</Text>
          <Text style={styles.emailText}>Username</Text>
          <TextInput
           style={styles.inputFeilds}
           value={signUp.username}
           onChangeText={event => SetSignUp({...signUp, username:event})}/>
           {err !=null && <Text style={{marginLeft:150, color:"red"}}>Username already exists</Text>}
           <Text style={styles.passwordText}>Password</Text>
          <TextInput
           style={styles.inputFeilds}
           value={signUp.password}
           onChangeText={event => SetSignUp({...signUp, password:event})}
           secureTextEntry={true}/>
           <View style={{flexDirection: 'row-reverse',}}>
           <TouchableOpacity
             onPress={onPress}
             style={styles.createAccountButton}
           >
             <Text style={styles.createAccountText}>Create Account</Text>
           </TouchableOpacity>
           </View>
        </View>
       </KeyboardAwareScrollView>
      );
    }
    

export default SignUp;