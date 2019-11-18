import React, {useState, useEffect} from "react";
import {View, Text, Button} from "react-native";
import RecipeList from "./RecipeList"
import axiosWithAuth from "../utils/axiosWithAuth";
import styles from '../styles/recipe-styles';

const CookBookFolder = (props) =>{
    const [folder, setFolder] = useState([])
    const [loading, setLoading] = useState(false)
   
    const course =  props.navigation.getParam('Course', 'params not passed');

    const grab =  async () =>{
        // console.log('course in grab', course);
        const axiosAuth = await axiosWithAuth();
       axiosAuth.get(`https://recipeshare-development.herokuapp.com/cookbook?category=${course}`)
      .then(res => {
          setFolder(res.data);
   })
      .catch(err => console.log(err));
    }

    useEffect( () =>{
        grab();
    },[]);


    return(
        <View style={{alignItems : 'center', justifyContent: 'center'}}>
            {folder.length ? 
            <RecipeList recipes={folder} courseType={course}/> :
            <>
                <Text style={styles.noRecipes}>You have no saved recipes in this section of your Cookbook!</Text> 
                <Button title="<- Back To My Cookbook" onPress={() => props.navigation.pop()} />
            </>
            }
        </View>
    )
}

export default CookBookFolder;