import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text} 
from "react-native";

const CookBookFolder = (props) =>{

    return(
        <View>
            <Text>{props.course}</Text>
            <RecipleList props={props.navigation.getParam.data}/>
        </View>
    )
}

export default CookBookFolder;