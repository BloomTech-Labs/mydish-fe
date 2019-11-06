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

  
 useEffect(()=> {
            //console.log("true", props.props)
            AxiosWithAuth()
            .get(`https://recipeshare-development.herokuapp.com/cookbook`)
            .then(res => {
                console.log("mycookbook", res)
                setSavedRecipes([res.data]);
             
            })
            .catch(err => console.log(err));
}, [])
    
    
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
        <View style={ {alignSelf:'center', flexDirection: "column"}}>
            {/* <Text>{user.props.name}</Text> */}
            {/* {folderName.props.map(folder  => {
                return (
                    <TouchableOpacity style={styles.button}>
                    <Butto n  
                    color="white"    
                    onPress={()  =>  props.navigation.navigate('CookBookFolder',  {data: folder})}
                    title={folder.courses}
                    accessibilityLabel="Search"                   
                    />
                </TouchableOpacity>
                )
            })} */}
            {/* {savedRecipes.length>=1  && <RecipeList props={savedRecipes} /> */} 
            <Text style={{fontSize: 20,fontWeight: 'bold', alignSelf: 'center', marginBottom: 5, color:`#3BA405`}}>Your Personal CookBook!</Text>
            <Text style={{alignSelf:'center', marginBottom: 7, marginLeft:2, marginRight:2, paddingLeft:7, paddingRight: 7, backgroundColor: `#3BA405`, color: 'white'}}>"The painter, sculptor, writer, and musician are protected by law. So are inventors. But the chef has absolutely no redress for plagiarism on his work; on the contrary, the more the latter is liked and appreciated, the more will people clamour for his recipes."</Text>
            <Image            
                
                source={{uri : "https://help.anylist.com/img/articles/add-recipe-ingredients-to-list-1.png"}}
                style={{width: 350, height: 500, borderRadius: 20, paddingRight: 20, paddingLeft: 20,alignSelf: 'center'}}
                resieMode="contain"
                
            />
        </View>
    )

}

export default MyCookBook;