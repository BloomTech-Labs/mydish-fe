import React, {useState, useEffect} from "react";
import 
{View,TouchableOpacity, TextInput, Button, StyleSheet, Text, Image, ScrollView} 
from "react-native";
import RecipeList from "./RecipeList";
import axiosWithAuth from "../utils/axiosWithAuth";



const MyCookBook = (props) =>{
    const [test, setTest] = useState([])
    const [word, setWord] = useState('')
    
    const Courses= [{course:'Breakfast', img:"https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/breakfast_breakfast-classics_big-two-do-breakfast.jpg"},{course:'Brunch', img:"https://media.timeout.com/images/105500044/1024/576/image.jpg" },{course:'Lunch', img:"https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/1600x1600/square-1507827786-buddha-bowls-delish-1.jpg?resize=640:*" },{course:'Dinner', img:"https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2016/09/main/_1501p108-weeknight-lemon-chicken-skillet-dinner.jpg?itok=sGWzw71z" },{course:'Dessert', img:"https://cdn3.tmbi.com/toh/GoogleImages/exps19201_RDS011700016SC03_13_2b_WEB.jpg"},{course:'Snack', img:"https://data.thefeedfeed.com/recommended/post_4483824.jpeg"}]

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

    console.log("USERNAME", props.name)
    return(
        <ScrollView style={ {flexDirection: "column", width:"90%", marginLeft:"5%", marginBottom:"10%", flex:1}}>
        
        	{/* <TextInput
					style={styles.textInput}
					placeholder="What are you looking for?"
                    placeholderTextColor="#D3D3D3
                    "
					value={dish}
                    onChangeText={dish => setDish(dish)}
				/> */}
            <Text style={{fontSize: 20,fontWeight: 'bold', alignSelf: 'center', marginBottom: 5, color:`#3BA405`}}>Your Personal CookBook!</Text>
            
                {Courses.map(cour =>{
                    console.log("COURSE", cour)
                    return(
                    <TouchableOpacity onPress={()  =>  props.navigation.navigate('Courses', {Course: cour.course})} >
                        <View style={{ height:"50%", marginBottom:"10%"}}>
                            <Text style={{fontSize: 14}}>
                                {cour.course}
                            </Text>
                            <Image 
                            source={{uri : cour.img}}
                            style={{width: "100%", height: "130%", borderRadius: 4, paddingRight: 20 }}

                            />
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
        </ScrollView>
    )

}

export default MyCookBook;