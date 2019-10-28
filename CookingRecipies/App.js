

import React from 'react';
import RecipeList from './Components/RecipeList';
import {View, Text, SafeAreaView, } from 'react-native';
import styles from './styles/styles';
import Search from "./Component/Search";



const App = () => {
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
        <Text style={styles.red}>Hello World</Text>
        <Text style={styles.red}>wow</Text>
      </SafeAreaView>

  );
};

export default App;
