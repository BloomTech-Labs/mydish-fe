import React from 'react';
import {
  View,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles/signUpStyles.js'


const Signout = props => {

    const signOutAsync = async () => {
      await AsyncStorage.clear();
      props.navigation.navigate('Auth');
    };
    
      return (
       
        <View style={styles.signUp}>
        
           <Button title="Actually, sign me out :)" 
          onPress={signOutAsync} /> 

        </View>
       
      );
    }
    

export default Signout;