import React, {useState, useEffect} from "react";
import {View,Text,ScrollView, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import axios from 'axios'

// import StockPhoto from '../assets/stock_photo.jpg'
import styles from '../styles/individualRecipeStyles.js'
import saves from '../assets/save_alt.png';
import clearBlackHeart from '../assets/clear-heart-black.png';
import editIcon from '../assets/edit_icon.png';
import clock from '../assets/timer.png';
import logo from '../assets/background.png';
import IndividualRecipeIngredients from './individualRecipeIngredients';
import axiosWithAuth from "../utils/axiosWithAuth";


var Cereal = "https://i.imgur.com/iYFK1mG.png"

const IndividualRecipe = props => {
    const [recipe, setRecipe] = useState([])
    let [userToken,setUserToken] = useState(null);


    const id =  props.navigation.getParam('recipeID', 'params not passed')

    const getToken = async () => {  
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            setUserToken(token); //the token is used to determine if the <Like> component should be rendered or not
        }
      
       return token;
    }
    

    useEffect(() =>{
       // console.log('useEffect navigation props in <IndividualRecipe/>', props.navigation);
       getToken()
        axios.get(`https://recipeshare-development.herokuapp.com/recipes/${id}`)
        .then(res => setRecipe(res.data))
        .catch(err => console.log(err));
    },[]);

    const [color, setColor] = useState({active: 'Ingredients'})

    const tabsDisplay = (cat) => {
        const newActive= cat
        setColor({active: newActive})
      }

      const capitalize = (string) => {
        const newString = string.replace(/^\w/, c => c.toUpperCase());
        return newString
      }

      const im = ()=>{
        if(recipe.img==null){
            return(
                <Image source={{uri: Cereal}}
                style={{width: '100%', height: 345}} />
            )
        }else{
            return(
                <Image source={{uri: recipe.img}}
                style={{width:'100%', height: 345}} />
            )
        }
    }

    

    const navigateToEdits = () => {
        props.navigation.navigate('Edit', {recipe} )
    }

    // console.log('recipe in individual recipes',recipe)
    return (
     <ScrollView>
            {im()}

            <Text style={styles.title}>{recipe.title}</Text>
            <View style={styles.time}>
                <View style={{flexDirection: 'row'}}>
                <Image source={logo} style={{width: 20, height: 20}}/> 
                <Text style={{marginLeft: 5}}>{recipe.innovator_name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={clock} style={{width: 20, height: 20}}/> 
                    <Text>{recipe.minutes} minutes</Text>
                </View>
            </View>
         <Text style={styles.tags}>Tags</Text>
             <View style={{borderBottomWidth: 0.3, borderBottomColor: '#6B6F70',}}>
         <View style={styles.tagBox}>
        {recipe.categories && recipe.categories.map( cat => {
            return(
                <View key={cat}>
                    <Text style={styles.individualTags}>{capitalize(cat)}</Text>
                </View>
            )
        })}
        </View>
        </View>
        {userToken &&
        <TouchableOpacity onPress={navigateToEdits}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.editButtonView}>
        <Image source={editIcon} style={styles.editButton}/> 
        </View>
            <Text style={{marginLeft: 10}}>Make changes to recipe</Text>
        </View>
        </TouchableOpacity>}
        
        <View style={styles.ingredients}> 
            <TouchableOpacity onPress={() => tabsDisplay('Ingredients')}>
                <View style={color.active.includes('Ingredients') ? styles.titlesViewBorderIng : styles.titlesViewBorderIngOff}>
                    <Text style={color.active.includes('Ingredients') ? styles.titlesColorWhite : styles.titlesColorBlue}>Ingredients</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tabsDisplay('Instructions')}>
                <View style={color.active.includes('Instructions') ? styles.titlesViewBorderInstOn : styles.titlesViewBorderInst}>
                    <Text style={color.active.includes('Instructions') ? styles.titlesColorWhite : styles.titlesColorBlue}>Instructions</Text>
                </View>
            </TouchableOpacity>
        </View >
        <View style={styles.details}>
      {recipe.ingredients && recipe.ingredients.map( ing => { return <IndividualRecipeIngredients ing={ing} key={ing.name}color={color}/>})}
         
         {recipe.steps && recipe.steps.map( (step, index) => {
            return(
                <View key={step.ordinal} style={color.active.includes('Ingredients') ? styles.hidden : styles.stepTextView}>
                        {/* .split('.')[0] */}
                    <Text style={styles.stepText}>{step.ordinal}. {step.body}</Text>
                </View>
            )
        })}
        <View style={{paddingRight:'80%'}}>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden : styles.notes}>NOTES</Text>
       </View>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden :styles.stepTextView}>{recipe.notes}</Text>
        </View>

    </ScrollView>
    );
  };

  export default IndividualRecipe;