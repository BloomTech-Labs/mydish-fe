/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import styles from './styles/styles';
import RecipeList from './Components/RecipeList';

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
      <SafeAreaView>
        {/* <Search/> */}
        <View>
        <Text style={styles.header}>Recipe Hub</Text>
        <RecipeList/>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
