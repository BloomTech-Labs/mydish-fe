import React from 'react';
import Search from "./Search.js";

import {
  SafeAreaView,
} from 'react-native';


const HomePage = (props) => {

  React.useEffect(() => {
    // console.log('props in HomePage', props.navigation);
  },[])

  
  return (
      <SafeAreaView>
        <Search/>
      </SafeAreaView>
  );
};


export default HomePage;