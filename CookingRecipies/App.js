/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import RecipeList from './Components/RecipeList';
import {View, Text, SafeAreaView, } from 'react-native';


const App = () => {
  return (
    <>
      <SafeAreaView>
          <RecipeList/>
      </SafeAreaView>
    </>
  );
};

export default App;
