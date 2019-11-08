import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text} 
from "react-native";
import axios from 'axios'
import RecipeList from "./RecipeList"

const CookBookFolder = (props) =>{
    const [store, setStored] = useState([])
   
    const course =  props.navigation.getParam('Courses', 'params not passed')


    useEffect(() =>{
        axios
        .get(
          `https://recipeshare-development.herokuapp.com/cookbook${course}`
        )
        .then(res => {
            setStored(res.data);
     })
        .catch(err => console.log(err));
        
    },[]);

    return(
        <View>
            <RecipeList props={store}/>
        </View>
    )
}

export default CookBookFolder;