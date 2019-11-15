import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text} 
from "react-native";
import axios from 'axios'
import RecipeList from "./RecipeList"
import axiosWithAuth from "../utils/axiosWithAuth";
import { withNavigation } from 'react-navigation'


const CookBookFolder = (props) =>{
    const [store, setStored] = useState([])
    // let [cookbookRefresh, setCookbookRefresh] = useState(false);
   
    let course =  props.navigation.getParam('Course', 'params not passed');
    // course = course.toLowerCase();
    // console.log('course in "CookBookFolder', course);



    // console.log("COURSE", course);

    const grab =  async () =>{
        // console.log('course in grab', course);
        const axiosAuth = await axiosWithAuth();
       axiosAuth.get(`https://recipeshare-development.herokuapp.com/cookbook?category=${course}`)
      .then(res => {
            // console.log('res.data cookbook', res.data);
        //   setStored([]);
          setStored(res.data);
   })
      .catch(err => console.log(err));
    }

    useEffect( () =>{
        // console.log('useEffect triggered in CookBookFolder', cookbookRefresh);
        grab()      
    },[]);

    // console.log('store', store);

    // const refreshCookbook = () => {
    //     setCookbookRefresh(!cookbookRefresh);
    // }
    

    return(
        <View>
            {/* <TouchableOpacity onPress={refreshCookbook}> */}
                 {store.length >= 1 && <RecipeList recipes={store} courseType={course} />}
            {/* </TouchableOpacity> */}
        </View>
    )
}

export default CookBookFolder;