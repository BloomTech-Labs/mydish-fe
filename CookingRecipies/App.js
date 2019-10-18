/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styles from './styles/styles';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView
      style={{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
       }}>
        {/* <Search/> */}
        {/* <RecipeList/> */}
        <Text style={styles.red}>Hello World</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
