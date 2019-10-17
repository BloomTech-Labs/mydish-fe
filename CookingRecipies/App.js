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
      <SafeAreaView>
        {/* <Search/> */}
        {/* <RecipeList/> */}
        <View>
        <Text style={styles.red}>Hello World</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
