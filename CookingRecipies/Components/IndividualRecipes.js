import React, {useState, useEffect} from "react";
import {View,Text,ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import axios from 'axios'

import StockPhoto from '../assets/stock_photo.jpg'
import styles from '../styles/individualRecipeStyles.js'
import saves from '../assets/save_alt.png';
import clearBlackHeart from '../assets/clear-heart-black.png';
import editIcon from '../assets/edit_icon.png';
import clock from '../assets/timer.png';
import logo from '../assets/background.png';
import styled from 'styled-components';
import IndividualRecipeIngredients from './individualRecipeIngredients';
//import individualRecipeIngredients from "./individualRecipeIngredients.js";

var Cereal = "https://image.shutterstock.com/z/stock-photo-cornflakes-with-milk-in-the-white-bowl-322906217.jpg"

let IndividualRecipes = props => {
    const [store, setStored] = useState([])

    //console.log("id in individualRecipe.js", props.navigation.getParam('paramsID', 'params not passed'))

    const id =  props.navigation.getParam('paramsID', 'params not passed')
    console.log("id in individualRecipe.js", id)

    var Cereal = "https://image.shutterstock.com/z/stock-photo-cornflakes-with-milk-in-the-white-bowl-322906217.jpg"


    useEffect(() =>{
        axios
        .get(
          `https://recipeshare-development.herokuapp.com/recipes/${id}`
        )
        .then(res => {
            setStored(res.data);
            console.log('store in individual recipes',store)
            // axios.get(
            //   `https://recipeshare-development.herokuapp.com/cooks/${store.innovator}`
            // ).then(res => console.log(res))
            // .catch(err => console.log('error from second axios call inside individula recipes', err))
        })
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
      const setOrdinalToOne = (ordinal) => {
          //console.log('ordinal', ordinal)
          if(ordinal === '0.00'){
           // console.log('ordinal inside if statement', ordinal)
             const numPlusOne = Number(ordinal) + 1.00
            return numPlusOne.toString()
          }else{
              return ordinal;
          }
      }

      const im = ()=>{
        if(store.img==null){
            return(
                <Image source={{uri: Cereal}}
                style={{width: 400, height: 400, marginLeft: 7}} />
            )
        }else{
            return(
                <Image source={{uri: store.img}}
                style={{width: 400, height: 400, marginLeft: 7}} />
            )
        }
    }
      
    
    return (
     <ScrollView>
            {im()}
            { console.log('img inside scrollview',store.img)}
            <Text style={styles.title}>{store.title}</Text>
            <View style={styles.time}>
                <View>
                <Image source={logo} style={{width: 20, height: 20}}/> 
                {/* <Text>Edited by: {store.innovator}</Text> */}
                <Text>Recipe by: {store.innovator_name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
            <Image source={clock} style={{width: 20, height: 20}}/> 
        <Text>{store.minutes} minutes</Text>
            </View>
            </View>

         <Text style={styles.tags}>Tags</Text>
         <View style={styles.tagBox}>
        {store.categories && store.categories.map( cat => {
            return(
                <View key={cat}>
                    <Text style={styles.individualTags}>{capitalize(cat)}</Text>
                </View>
            )
        })}

        </View>
         <View style={styles.likes}>
             <View style={styles.likeView}>
            <Image source={clearBlackHeart} style={{width: 20, height: 20}}/>
            <Text >{store.likes}</Text>
            </View>
                {/* <TouchableOpacity>
            <View style={styles.likeView}>
            <Image source={saves} style={{width: 20, height: 20}}/>
            <Text >Save</Text>
            </View>
            </TouchableOpacity> */}
            </View>
        <View style={styles.editView}>
        {/* <TouchableOpacity>
            <View style={styles.editButtonView}>
        <Image source={editIcon} style={styles.editButton}/>
        </View>
        </TouchableOpacity> */}
        </View >
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
      {store.ingredients && store.ingredients.map( ing => { return <IndividualRecipeIngredients ing={ing} key={ing.name}color={color}/>})}
         
         {store.steps && store.steps.map( (step, index) => {
            return(
                <View key={step.ordinal} style={color.active.includes('Ingredients') ? styles.hidden : styles.stepTextView}>

                    <Text style={styles.stepText}>{setOrdinalToOne(step.ordinal).split('.')[0]}. {step.body}</Text>
                </View>
            )
        })}
        <Text style={ color.active.includes('Ingredients') ? styles.hidden : styles.notes}>NOTES</Text>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden :styles.stepTextView}>{store.notes}</Text>
        </View>

    </ScrollView>
    );
  };

  export default IndividualRecipes;