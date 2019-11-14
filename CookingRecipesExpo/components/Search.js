import React, {useState, useEffect} from "react";
import {View,TouchableOpacity, TextInput, Button, StyleSheet, Text, ScrollView, Image} from "react-native";
import axios from "axios";
import logo from '../assets/LogoGreen.png';
import RecipeList from './RecipeList.js'

const Search = () => {
    let [dish, setDish] = useState('')
    let [recipes, setRecipes] = useState([])

    useEffect(() =>{
        axios
        .get(
          `https://recipeshare-development.herokuapp.com/recipes?title=${dish}`
        )
        .then(res => {
            setRecipes([])          
            setRecipes(res.data);
            
        })
        .catch(err => console.log(err));
    },[dish]);

    return(
        <View>
            <View style = {{flexDirection: 'row', justifyContent: 'left', textAlign: 'left', paddingBottom:"2%", marginTop: "2%"}}>
                <Image source={logo} style={{width: "9%", height: "86%", marginLeft: "2%"}}/> 
                <Text style={styles.title}>RecipeShare</Text>
          </View>
				 <TextInput
					style={styles.textInput}
					placeholder="What dish are you looking for?"
					placeholderTextColor="#D3D3D3"
					value={dish}
                    onChangeText={dish => setDish(dish)}
                    //onSubmitEditing={grabRecipes}
				/>
                 {/* <TouchableOpacity style={styles.button}>
                    <Button  
                    color="white"    
                    onPress={grabRecipes}
                    title="Search"
                    accessibilityLabel="Search"                   
                    />
                </TouchableOpacity> */}
                <ScrollView>
                    {recipes.length>=1  && <RecipeList recipes={recipes} setRecipes={setRecipes} /> }
                </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "#42C200",
        fontSize: 18,
        fontWeight: 'bold', 
        // paddingBottom:14,
        paddingTop: 5, 
        paddingLeft: 10
    },
    textInput: {
        //flex: 1,
        height: 40,
        //width: 300,
        fontSize: 18,
        margin: 7,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 3,
        minHeight: '5%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da'
    },
    button: {
        borderRadius: 4,
        borderWidth: 2,
        marginLeft: 100,
        marginRight: 100,
        borderColor: '#3BA405',
        backgroundColor: `#3BA405`
    }
})

export default Search;