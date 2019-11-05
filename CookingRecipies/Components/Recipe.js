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


var Cereal = "https://image.shutterstock.com/z/stock-photo-cornflakes-with-milk-in-the-white-bowl-322906217.jpg"
var HomeFries = "https://image.shutterstock.com/z/stock-photo-fried-potatoes-147539354.jpg"
var Eggplant = "https://image.shutterstock.com/image-photo/grilled-eggplants-seasoned-olive-oil-260nw-87708241.jpg"
var ScrambledEggs = "https://image.shutterstock.com/image-photo/mexican-food-recipes-revoltillo-de-600w-752977636.jpg"
let fakeImages=["Cereal","Home Fries","Eggplant","Scrambled Eggs"]

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const Recipe = (props) => {
    const [num, setNum]= useState(1)
    console.log("jeight", props.height)
    let [like, setLike] = React.useState(false);


    const im = ()=>{
        if(props.recipe.img==null){
            return(
                <Image 
                
                source={{uri : Cereal}}
                style={{width: 160, height: props.height, borderRadius: 20, paddingRight: 20 }}
                resieMode="contain"
                
            />
            )
        }else{
            return(
                <Image 
                
                source={{uri : props.recipe.img}}
                style={{width: 160, height: props.height, borderRadius: 20, paddingRight: 20 }}
                resieMode="contain"
                
            />
            )
        }
    }

    
    //   useEffect(() =>{
    //     if (num !== 0){
    //         setNum()
    //         setNum(0)
    //         console.log("0", num)
    //     } 
    //     else{
    //         setNum()
    //         setNum(1)
    //         console.log("1 ", num)
    //     }
        
    //   }, [])
     
    // let [likeCount, setLikeCount] = React.useState(props.recipe.likes)  //get likes from recipe handed down via props from the database.

    // useEffect(() =>{
    //     for(i in fakeImages){
    //         console.log("i", fakeImages[i], props.recipe.title)
    //         if(fakeImages[i] == props.recipe.title=="Cereal"){
    //             console.log("hi")
    //             setImg(Cereal)
    //             console.log(img)
    //         }
    //         if(fakeImages[i] == props.recipe.title=="Home Fries"){
    //             setImg(HomeFries)
    //         }
    //     }
    //     console.log('props in recipe', img);
    // },[]);
        const RecipeCard = styled.View`
        justifyContent: flex-start;
        width: 130;
        marginLeft: 20;
        marginRight: 13;
        marginBottom: 110;
        `;

    const UserCard = styled.View`
      flexDirection : row;
      justifyContent : flex-start;
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
            {/* <View style={{flex: 1, minWidth: 160, alignItems: 'center'}}> */}
            <RecipeCard style={{height: props.height}}>
               <TouchableOpacity  
               onPress={()  =>  props.navigation.navigate('IndividualR', {paramsID: props.recipe.id})}
               >
                {/* <Like onStartShouldSetResponder={likeIt}>
                    <Image source={like ? solidHeart : clearHeart } style={{width: 20, height: 20}}/>
                    <Text style={{color : 'white', fontWeight: 'bold'}}> 3k</Text>
                </Like> */}
                {im()}
                <Text style={styles.text}>{props.recipe.title}</Text>
                <UserCard>
                    <Image source={{uri : "https://fakeimg.pl/50x50/?text=user"}}
                        style={{width: 50, height: 50 }}/>
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