/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styles from './styles/styles';
import Search from "./Component/Search";

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
    <SafeAreaView>
      {/* <StatusBar barStyle="dark-content" /> */}
      
        
        {/* <RecipeList/> */}
        <View>
        <Text >hi</Text>
        </View>
        <Search/>
      </SafeAreaView>

  );
};

export default App;
