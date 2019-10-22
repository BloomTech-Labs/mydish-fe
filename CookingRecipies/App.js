/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import RecipeList from './Components/RecipeList';
import {View, Text, SafeAreaView} from 'react-native';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView>
          <RecipeList/>
           {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView> */}
        {/* <Search/> */}
        {/* <View> */}
          {/* <Text style={styles.header}>Recipe Hub</Text> */}
        {/* </View> */}
      {/* </SafeAreaView> */}
      </SafeAreaView>
    </>
  );
};

export default App;
