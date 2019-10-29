import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text} 
from "react-native";


const MyCookBook = (props) =>{
    const[folderName, setFolderName] = useState([
        {
            course: '',
            recipes:  []
        }
    ]);
    const [savedRecipes,  setSavedRecipes] = useState([props]);

    useEffect(()=>{
        for(i in savedRecipes){
            for(x in savedRecipses){
                if(i.course == folderName.course){
                    setFolderName(...folderName, {...folderName.course, recpies: recpies.append(i)})
                }
                setFolderName(...folderName, {course: i.course, recpies: recpies.append(i)})
            }
        }

    },[]);

    return(
        <View>
            {/* <Text>{user.props.name}</Text> */}
            {folderName.props.map(folder  => {
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
            })}
        </View>
    )

}

export default MyCookBook;