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
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

var Cereal = "https://i.imgur.com/iYFK1mG.png"

const Recipe = (props) => {
    const [num, setNum]= useState(1)
    let [like, setLike] = React.useState(false);
    let [likeCount, setLikeCount] = React.useState(0);
    
    const UserCard = styled.View`
    `;

    const Like = styled.View`
        flexDirection: row;
        position: absolute;
        left : 10;
        top: 5;
        zIndex : 1;
    `;

    const likeIt = async () => {
        console.log('like pressed');
        console.log('props.recipe.id: ', props.recipe.id);
        await setLike(!like);
        console.log('liked?', like);
        const axiosAuth = await axiosWithAuth();
        console.log('axiosAuth', axiosAuth);
        if (!like) {
            axiosAuth.post(`https://recipeshare-development.herokuapp.com/likes/${props.recipe.id}`,{})
                .then(res => {
                    console.log('response from post like: ', res.data.message);
                })
                .catch(err => console.log('error in posting like', err.response))
        } else {
            axiosAuth.delete(`https://recipeshare-development.herokuapp.com/likes/${props.recipe.id}`)
                .then(res => console.log('res from unlike', res))
                .catch(err => console.log('err from deleting like', err))
        }
    }

    return (
            <View style={{height: props.cardHeight, width: "240%"}}>
                <Like onStartShouldSetResponder={likeIt}>
                    <Image source={like ? solidHeart : clearHeart } style={{width: 20, height: 20}}/>
                    <Text style={{color : 'white', fontWeight: 'bold'}}>{String(likeCount)}</Text>
                </Like>
               <TouchableOpacity  
               onPress={()  =>  props.navigation.navigate('IndividualR', {paramsID: props.recipe.id})}
               >
                
               <Image 
                source={{uri : (props.recipe.img ? props.recipe.img : Cereal)}}
                style={{width: "50%", height: props.imageHeight, borderRadius: 3, paddingRight: 20 }}
                resieMode="contain"
                />
                {/* {im()} */}
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
            </View>
    )
}

export default withNavigation(Recipe);


             
    // const im = ()=>{
    //     if(props.recipe.img==null){
    //         return(
    //             <Image 
                
    //             source={{uri : Cereal}}
    //             style={{width: "50%", height: props.imageHeight, borderRadius: 3, paddingRight: 20 }}
    //             resieMode="contain"
                
    //         />
    //         )
    //     }else{
    //         return(
    //             <Image 
                
    //             source={{uri : props.recipe.img}}
    //             style={{width: "50%", height: props.imageHeight, borderRadius: 3, paddingRight: 20 }}
    //             resieMode="contain"
                
    //         />
    //         )
    //     }
    // }