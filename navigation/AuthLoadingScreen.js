import React, { useEffect } from 'react';
import { AsyncStorage, View, StatusBar } from 'react-native';
import FancySpinner from '../components/FancySpinner';

function AuthLoadingScreen({ navigation }) {
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? 'App' : 'Auth');
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  useEffect(() => {
    _bootstrapAsync();
  }, []);

  // Render any loading content that you like here
  return (
    <View>
      <FancySpinner />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingScreen;
