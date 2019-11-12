import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text} 
from "react-native";
import axios from 'axios'
import RecipeList from "./RecipeList"
import axiosWithAuth from "../utils/axiosWithAuth";


const CookBookFolder = (props) =>{
    const [store, setStored] = useState([])
    const True = true;
   
    const course =  props.navigation.getParam('Course', 'params not passed')

    console.log("COURSE", course)

    useEffect(async () =>{
        const axiosAuth = await axiosWithAuth();
        axiosAuth
        .get(
          `https://recipeshare-development.herokuapp.com/cookbook?category=${course}`
        )
        .then(res => {
            
            setStored(res.data);
     })
        .catch(err => console.log(err));
        
    },[]);

    console.log("DATA", store)
    return(
        <View>
            {store.length > 1 && <RecipeList props={store} status={True}/>}
            
        </View>
    )
}

export default CookBookFolder;