import React from 'react';
import RecipeList from './Components/RecipeList';
import {View, Text, SafeAreaView, } from 'react-native';
import styles from './styles/styles';
import Search from "./Components/Search";
import CreateRecipeForm from './Components/CreateRecipeForm';


const App = () => {
  return (
      <SafeAreaView>
        {/* <StatusBar barStyle="dark-content" /> */}
        <Search/>
        {/* <RecipeList/> */}
        {/* <CreateRecipeForm/> */}

      </SafeAreaView>

  );
};

export default App;
