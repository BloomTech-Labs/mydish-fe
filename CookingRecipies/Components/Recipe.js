import React, {useState, useEffect}from 'react';
import styles from '../styles/recipe-styles';
import {View,Text,ScrollView, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation'
// import {Icon} from 'react-native-elements';
// import Icon from "react-native-vector-icons/FontAwesome";
// import ipad from '../assets/ipadrecipe.jpg';
// const ipad = require('../assets/ipadrecipe.jpg');
import styled from 'styled-components';
import clearHeart from '../assets/clear-heart.png';
import solidHeart from '../assets/solid-heart.png';


var Cereal = "https://i.imgur.com/iYFK1mG.png"
var HomeFries = "https://image.shutterstock.com/z/stock-photo-fried-potatoes-147539354.jpg"
var Eggplant = "https://image.shutterstock.com/image-photo/grilled-eggplants-seasoned-olive-oil-260nw-87708241.jpg"
var ScrambledEggs = "https://image.shutterstock.com/image-photo/mexican-food-recipes-revoltillo-de-600w-752977636.jpg"
let fakeImages=["Cereal","Home Fries","Eggplant","Scrambled Eggs"]

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const Recipe = (props) => {
    const [num, setNum]= useState(1)
    let [like, setLike] = React.useState(false);

    const im = ()=>{
        if(props.recipe.img==null){
            return Cereal
        }else{
            return props.recipe.img
        }
    }

     
    // let [likeCount, setLikeCount] = React.useState(props.recipe.likes)  //get likes from recipe handed down via props from the database.


        const RecipeCard = styled.View`
        marginLeft: 10;
        `;

    const UserCard = styled.View`

    `;

    const Like = styled.View`
        flexDirection: row;
        position: absolute;
        left : 10;
        top: 5;
        zIndex : 1;
    `;

    // const RecipeImage = styled.View`
    //     marginRight: 30;
    //     paddingRight: 10;
    // `;

    const likeIt = () => {
        console.log('like pressed');
        setLike(!like);
    }


    return (
        <>
            <RecipeCard style={{height: props.cardHeight}}>
               <TouchableOpacity  
               onPress={()  =>  props.navigation.navigate('IndividualR', {paramsID: props.recipe.id})}
               >
                {/* <Like onStartShouldSetResponder={likeIt}>
                    <Image source={like ? solidHeart : clearHeart } style={{width: 20, height: 20}}/>
                    <Text style={{color : 'white', fontWeight: 'bold'}}> 3k</Text>
                </Like> */}
            <Image source={{uri : im()}}style={{width: 160, height: props.imageHeight, borderRadius: 3, paddingRight: 20 }}/>
                <Text style={styles.text}>{props.recipe.title}</Text>
                <UserCard>
                    {/* <Image source={{uri : "https://fakeimg.pl/50x50/?text=user"}}
                        style={{width: 50, height: 50 }}/> */}
                    <View style={styles.usercardTxt}>
                        <Text style={styles.username}>{props.recipe.username}</Text>
                        <Text style={styles.prep}>{props.recipe.minutes} min.</Text>
                    </View>
                </UserCard>
                 </TouchableOpacity>
            </RecipeCard>
        </>
    )
}

export default withNavigation(Recipe);