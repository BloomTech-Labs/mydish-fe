import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text} 
from "react-native";
import axios from 'axios'
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

    
    
    // useEffect(()=>{
    //     for(i in savedRecipes){
    //         for(x in folderName){
    //             if(i.course == folderName.course){
    //                 setFolderName(...folderName, {...folderName.course, recpies: recpies.append(i)})
    //             }
    //             setFolderName(...folderName, {course: i.course, recpies: recpies.append(i)})
    //         }
    //     }

    // },[]);

    return(
        <View>
            {/* <Text>{user.props.name}</Text> */}
            {/* {folderName.props.map(folder  => {
                return (
                    <TouchableOpacity style={styles.button}>
                    <Button  
                    color="white"    
                    onPress={()  =>  props.navigation.navigate('CookBookFolder',  {data: folder})}
                    title={folder.courses}
                    accessibilityLabel="Search"                   
                    />
                </TouchableOpacity>
                )
            })} */}
            {/* {savedRecipes.length>=1  && <RecipeList props={savedRecipes} /> } */}
        </View>
    )

}

export default MyCookBook;