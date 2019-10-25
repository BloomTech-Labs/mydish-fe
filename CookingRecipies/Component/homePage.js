import React from 'react';
import styles from '../styles/styles.js';
import Search from "./Search.js";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const HomePage = () => {
  return (

      <SafeAreaView
      // style={{
      //   flex: 1, 
      //   justifyContent: "center", 
      //   alignItems: "center"
      //  }}
       >
        {/* <StatusBar barStyle="dark-content" /> */}
        <Search/>
        {/* <RecipeList/> */}
        <Text style={styles.red}>Hello home page</Text>
      </SafeAreaView>

  );
};

HomePage.navigationOptions = {
    title: 'Home',
    };

export default HomePage;