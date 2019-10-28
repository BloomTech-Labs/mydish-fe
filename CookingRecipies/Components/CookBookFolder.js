import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text} 
from "react-native";
import axios from 'axios'

const CookBookFolder = (props) =>{

    // const deleteRecipe = () => {
    //     axios.delete('')
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    return(
        <View>
            <Text>{props.course}</Text>
            <RecipleList props={props.navigation.getParam.data}/>
            {/* <Button
            onPress={deleteRecipe}
            >Delete Recipe</Button> */}
        </View>
    )
}

export default CookBookFolder;