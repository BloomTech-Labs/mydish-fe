import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles/signUpStyles.js'



const SignUp = props => {
    const [signUp, SetSignUp] = useState({username: '', password: ''})
    const [err, setErr] = useState()

    console.log(signUp)

    const signOutAsync = async () => {
      await AsyncStorage.clear();
      props.navigation.navigate('Auth');
    };
    
    const onPress = () => {
     console.log("axios call goes here")
      axios.post('https://recipeshare-development.herokuapp.com/cooks/register', signUp)
      .then(res => console.log('response from sign up axios post', res))
      .catch(err => setErr(err))
    }
    
      return (
       
        <View style={styles.signUp}>
          <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          >
            <Text style={styles.exitButton}>x</Text>
          </TouchableOpacity>
          <Text style={styles.title}>RecipeShare</Text>
          <Text style={styles.createAccountTitle}>Create Account</Text>
          <Text style={styles.emailText}>Email</Text>
          <TextInput
           style={styles.inputFeilds}
           value={signUp.username}
           onChangeText={event => SetSignUp({...signUp, username:event})}/>
           {err !=null && <Text>{err}</Text>}
           <Text style={styles.passwordText}>Password</Text>
          <TextInput
           style={styles.inputFeilds}
           value={signUp.password}
           onChangeText={event => SetSignUp({...signUp, password:event})}
           secureTextEntry={true}/>
           <TouchableOpacity
             onPress={onPress}
             style={styles.createAccountButton}
           >
             <Text style={styles.createAccountText}>Create Account</Text>
           </TouchableOpacity>
           <Button title="Actually, sign me out :)" 
          onPress={signOutAsync} /> 
        </View>
       
      );
    }
    

export default SignUp;