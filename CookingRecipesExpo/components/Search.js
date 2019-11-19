import React, {useState, useEffect} from "react";
import {View,TouchableOpacity, TextInput, Button, StyleSheet, Text, ScrollView, Image} from "react-native";
import axios from "axios";
import logo from '../assets/LogoGreen.png';
import RecipeList from './RecipeList.js'
import styles from '../styles/search.styles';

const Search = (props) => {
    let [dish, setDish] = useState('')
    let [recipes, setRecipes] = useState([])
    let [recipeListRefresh, setRecipeListRefresh] = useState(false);


    useEffect(() =>{
        axios.get(`https://recipeshare-development.herokuapp.com/recipes?title=${dish}`)
            .then(res => {
                setRecipes([])          
                setRecipes(res.data);
            })
            .catch(err => console.log(err));
    },[dish,recipeListRefresh]);

    const focus = () => {
        console.log('focus on your search!');
        setDish('');
    }

    return(
        <View>
            <View style = {{flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left', paddingBottom:"2%", marginTop: "2%"}}>
                <Image source={logo} style={{width: "8%", height: "85%", marginLeft: "2%"}}/> 
                <Text style={styles.title}>RecipeShare</Text>
            </View>
				 <TextInput
					style={styles.textInput}
					placeholder="What dish are you looking for?"
					placeholderTextColor="#D3D3D3"
					value={dish}
                    onChangeText={dish => setDish(dish)}
                    // clearTextOnFocus={true}
                    // onBlur={handleBlur}
                    onFocus={focus}
				/>

                <ScrollView>
                        {recipes.length>=1  && <RecipeList recipes={recipes} setRecipes={setRecipes} /> }
                </ScrollView>
        </View>

    )
}

export default Search;