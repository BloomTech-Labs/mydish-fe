import React, {useState, useEffect} from "react";
import {View,Text,ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import axios from 'axios'

// import StockPhoto from '../assets/stock_photo.jpg'
import styles from '../styles/individualRecipeStyles.js'
import saves from '../assets/save_alt.png';
import clearBlackHeart from '../assets/clear-heart-black.png';
import editIcon from '../assets/edit_icon.png';
import clock from '../assets/timer.png';
import logo from '../assets/background.png';
import IndividualRecipeIngredients from './individualRecipeIngredients';


var Cereal = "https://image.shutterstock.com/z/stock-photo-cornflakes-with-milk-in-the-white-bowl-322906217.jpg"

const IndividualRecipe = props => {
    const [store, setStored] = useState([])
    const [token, setToken] = useState([])

    //console.log("id in individualRecipe.js", props.navigation.getParam('paramsID', 'params not passed'))

    const id =  props.navigation.getParam('paramsID', 'params not passed')
    console.log("id in individualRecipe.js", id)

    var Cereal = "https://i.imgur.com/iYFK1mG.png"
    
    async function axiosWithAuth() {
        const userToken = await AsyncStorage.getItem('userToken');
        setToken(userToken)
    }


    useEffect(() =>{
        axios
        .get(
          `https://recipeshare-development.herokuapp.com/recipes/${id}`
        )
        .then(res => {
            setStored(res.data);
            // console.log('store in individual recipes',store)
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

      const im = ()=>{
        if(store.img==null){
            return(
                <Image source={{uri: Cereal}}
                style={{width: '100%', height: 345}} />
            )
        }else{
            return(
                <Image source={{uri: store.img}}
                style={{width:'100%', height: 345}} />
            )
        }
    }
      
    
    return (
     <ScrollView>
            {im()}
            { console.log('img inside scrollview',store.img)}
            <Text style={styles.title}>{store.title}</Text>
            <View style={styles.time}>
                <View style={{flexDirection: 'row'}}>
                <Image source={logo} style={{width: 20, height: 20}}/> 
                <Text style={{marginLeft: 5}}>{store.innovator_name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
            <Image source={clock} style={{width: 20, height: 20}}/> 
        <Text>{store.minutes} minutes</Text>
            </View>
            </View>
            {token == true && <Text>TEST</Text>}

         <Text style={styles.tags}>Tags</Text>
             <View style={{borderBottomWidth: 0.3, borderBottomColor: '#6B6F70',}}>
         <View style={styles.tagBox}>
        {store.categories && store.categories.map( cat => {
            return(
                <View key={cat}>
                    <Text style={styles.individualTags}>{capitalize(cat)}</Text>
                </View>
            )
        })}
        </View>
        </View>
         {/* <View style={styles.likes}>
             <View style={styles.likeView}>
            <Image source={clearBlackHeart} style={{width: 20, height: 20}}/>
            <Text >{store.likes}</Text>
            </View>
                <TouchableOpacity>
            <View style={styles.likeView}>
            <Image source={saves} style={{width: 20, height: 20}}/>
            <Text >Save</Text>
            </View>
            </TouchableOpacity>
            </View> */}
        {/* <View style={styles.editView}>
        <TouchableOpacity>
            <View style={styles.editButtonView}>
        <Image source={editIcon} style={styles.editButton}/>
        </View>
        </TouchableOpacity>
        </View > */}
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

                    <Text style={styles.stepText}>{step.ordinal.split('.')[0]}. {step.body}</Text>
                </View>
            )
        })}
        <View style={{paddingRight:'80%'}}>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden : styles.notes}>NOTES</Text>
       </View>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden :styles.stepTextView}>{store.notes}</Text>
        </View>

    </ScrollView>
    );
  };

  export default IndividualRecipe;