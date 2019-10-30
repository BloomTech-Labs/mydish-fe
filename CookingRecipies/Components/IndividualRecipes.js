import React, {useState, useEffect} from "react";
import {View,Text,ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import axios from 'axios'

import StockPhoto from '../assets/stock_photo.jpg'
import styles from '../styles/individualRecipeStyles.js'
import clearHeart from '../assets/clear-heart.png';
import editIcon from '../assets/edit_icon.png';


let IndividualRecipes = props => {
    const [store, setStored] = useState([])

    //console.log("id in individualRecipe.js", props.navigation.getParam('paramsID', 'params not passed'))

    const id =  props.navigation.getParam('paramsID', 'params not passed')
    console.log("id in individualRecipe.js", id)

    useEffect(() =>{
        axios
        .get(
          `https://recipeshare-development.herokuapp.com/recipes/${id}`
        )
        .then(res => {
            setStored(res.data);
            console.log(store)
        })
        .catch(err => console.log(err));

    },[]);
    return (
     <ScrollView>

        <Image 
            // source={{uri : `${props.imageURL}`}}
            source={StockPhoto}
            style={{width: 450, paddingRight: 20 }}
            resieMode="contain"/>
            <Text style={styles.title}>{store.title}</Text>
            <View style={styles.likes}>
            <Image source={clearHeart} style={{width: 20, height: 20}}/>
            <Text >{store.likes}</Text>
            </View>

         <Text style={styles.tags}>Tags</Text>
         <View style={styles.tagBox}>
        {store.categories.map( cat => {
            return(
                <View>
                    <Text styles={styles.individualTags}>{cat}</Text>
                </View>
            )
        })}
        </View>
        <View>
        <Image source={editIcon} style={styles.editButton}/>
        <TouchableOpacity>
                    <Text 
                    // color="white"    
                    // onPress={grabRecipes}
                    title="My Version"
                    // accessibilityLabel="Edit"                   
                    >Make Changes</Text>
        </TouchableOpacity>
        </View>
      {store.ingredients.map( ing => {
            return(
                <View>
                    <Text>{ing.quantity} {ing.unit}</Text>
                    <Text>{ing.name}</Text>

                </View>
            )
        })}
         {store.steps.map( step => {
            return(
                <View>

                    <Text>Step {step.ordinal.split('.')[0]} - {step.body}</Text>
                </View>
            )
        })}
        <Text>{store.notes}</Text>
        <TouchableOpacity>
            <Button  
            // color="white"    
            // onPress={grabRecipes}
            title="Save to MyCookBook"
            // accessibilityLabel="Save"                   
            />
        </TouchableOpacity>

    </ScrollView>
    );
  };

  export default IndividualRecipes;