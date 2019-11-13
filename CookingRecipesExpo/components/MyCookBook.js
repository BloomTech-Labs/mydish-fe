import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text, Image, ScrollView} 
from "react-native";
import RecipeList from "./RecipeList";
import axiosWithAuth from "../utils/axiosWithAuth";



const MyCookBook = (props) =>{
    const [test, setTest] = useState([])
    const [word, setWord] = useState('')
    
    const courses= ['Breakfast','Brunch','Lunch','Dinner','Dessert','Snack'];

    const grab=  async () =>{
        const axiosAuth = await axiosWithAuth();
        axiosAuth.get(`https://recipeshare-development.herokuapp.com/cookbook?category=${word}`)
        .then(res => {
            console.log("WOOOOW", res.data)
            setTest(res.data);
          

        })
        .catch(err => console.log(err));
    }

    useEffect(() =>{
        grab()
    },[])

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
            <ScrollView style={{height: "230%"}}>

                {courses.map(cour =>{
                    console.log("COURSE", cour)
                    return(
                    <TouchableOpacity onPress={()  =>  props.navigation.navigate('Courses', {Course: cour})} >
                        <View style={{ backgroundColor: "#42C200", height:"70%"}}>
                            <Text style={{alignSelf:'center', fontSize: 20, color: "white"}}>
                                {cour}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    )
                })}

            </ScrollView>
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