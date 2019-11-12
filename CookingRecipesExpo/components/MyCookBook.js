import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text, Image, ScrollView} 
from "react-native";
import RecipeList from "./RecipeList";



const MyCookBook = (props) =>{
    
    const courses= ['Breakfast','Brunch','Lunch','Dinner','Dessert','Snack'];


    // useEffect(() =>{
    //     axios
    //     .get(
    //       `https://recipeshare-development.herokuapp.com/recipes?title=${dish}`
    //     )
    //     .then(res => {
    //         setRecipes([])
    //         setRecipes(res.data);
    //     })
    //     .catch(err => console.log(err));

    // },[dish]);


    return(
        <View style={ {flexDirection: "column", width:"90%", marginLeft:"5%"}}>
        
        	{/* <TextInput
					style={styles.textInput}
					placeholder="What are you looking for?"
                    placeholderTextColor="#D3D3D3
                    "
					value={dish}
                    onChangeText={dish => setDish(dish)}
				/> */}
            <Text style={{fontSize: 20,fontWeight: 'bold', alignSelf: 'center', marginBottom: 5, color:`#3BA405`}}>Your Personal CookBook!</Text>
            {courses.map(cour =>{
                return(
                <TouchableOpacity onPress={()  =>  props.navigation.navigate('Courses', {Course: cour})} >
                    <View style={{ backgroundColor: "#42C200", height:"30%"}}>
                        <Text style={{alignSelf:'center', fontSize: 20, color: "white"}}>
                            {cour}
                        </Text>
                    </View>
                </TouchableOpacity>
                )
            })}
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
        </View>
    )

}

export default MyCookBook;