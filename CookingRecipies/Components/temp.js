import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text, Image} 
from "react-native";
import RecipeList from "./RecipeList";
import AxiosWithAuth from "./AxiosWithAuth";



const MyCookBook = (props) =>{
    
    const[folderName, setFolderName] = useState([
        {
            course: '',
            recipes:  []
        }
    ]);
    const [savedRecipes,  setSavedRecipes] = useState([]);

  
    if(props.props!=null){
            console.log("true", props.props)
            AxiosWithAuth(props.props)
            .get(`https://recipeshare-development.herokuapp.com/cookbook`)
            .then(res => {
                console.log("mycookbook", res)
                setSavedRecipes([res.data]);
             
            })
            .catch(err => console.log(err));
    }


    return(
        <View >
           
        </View>
    )

}

export default MyCookBook;