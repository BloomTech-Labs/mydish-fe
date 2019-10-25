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

    console.log(signUp)

    const signOutAsync = async () => {
      await AsyncStorage.clear();
      props.navigation.navigate('Auth');
    };
    
    const onPress = () => {
     console.log("axios call goes here")
    //   axios.put('http://www.mocky.io/v2/5da8f1433100005b004e0679', signUp)
    //   .then(res => console.log('response from sign up axios post', res))
    //   .catch(err => console.log('error from sign up axios post',err))
    }
    
      return (
       
        <View style={styles.signUp}>
          <Text style={styles.title}>RecipeShare</Text>
          <Text style={styles.createAccountTitle}>Create Account</Text>
          <Text style={styles.emailText}>Email</Text>
          <TextInput
           style={styles.inputFeilds}
           value={signUp.username}
           onChangeText={event => SetSignUp({...signUp, username:event})}/>
           <Text style={styles.passwordText}>Password</Text>
          <TextInput
           style={styles.inputFeilds}
           value={signUp.password}
           onChangeText={event => SetSignUp({...signUp, password:event})}/>
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