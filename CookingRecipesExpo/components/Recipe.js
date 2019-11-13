import React, {useState, useEffect}from 'react';
import styles from '../styles/recipe-styles';
import {View,Text,ScrollView, Image, TouchableOpacity, AsyncStorage, Modal, Alert, Button} from 'react-native';
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
    let {navigation, cardHeight, imageHeight, recipe} = props;
    // console.log('recipe prop in <Recipe/>', recipe);
    const [num, setNum]= useState(1)
    let [like, setLike] = useState(recipe.likedByUser);
    let [likeCount, setLikeCount] = useState(recipe.total_saves);
    let [userToken,setUserToken] = useState(null);
    let [warn, setWarn] = useState(false);


    // console.log('recipe in <Recipe/>', recipe);


    const UserPrepTime = styled.View`
        flexDirection: row;
        justifyContent: space-between;
        width: 50%;
        marginBottom: 2%;
    `;
    
    const Like = styled.View`
        flexDirection: row;
        position: absolute;
        left : 10;
        top: 5;
        zIndex : 1;
    `;

    const getToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            setUserToken(token);
        }
        return token;
    }

    useEffect(() => {
        getToken();
        // console.log('liked? after set', like);
    },[like,likeCount])

    const likeIt = async () => {
        console.log('like pressed');
        console.log('recipe id: ', recipe.id);
        console.log('recipe total_saves', recipe.total_saves, like);
        if (recipe.total_saves == 1 && like === true) { // unliking will remove the recipe from the database
            //popup a modal warning the recipe will be deleted from the entire database
            setWarn(true);
            return;
        }
        let liked = !like;  //like is the state variable. it gets set after execution of the function likeIt() declared a temp liked variable to execute the logic of this function.
        console.log('liked? before set', like);  //false
        const axiosAuth = await axiosWithAuth();
        if (liked) {
            axiosAuth.post(`https://recipeshare-development.herokuapp.com/cookbook/${recipe.id}`,{})
                .then(res => {
                    console.log('response from post like: ', res.data);
                    if (!res.data.total_saves) {
                        setLikeCount(0);
                    }
                    setLikeCount(res.data.total_saves);
                    setLike(liked);
                })
                .catch(err => console.log('error in posting like', err))
        } else {
            axiosAuth.delete(`https://recipeshare-development.herokuapp.com/cookbook/${recipe.id}`)
                .then(res => {
                    console.log('res from unlike', res.data);
                    if (!res.data.total_saves) {
                        setLikeCount(0);
                    }
                    setLikeCount(res.data.total_saves);
                    setLike(liked);
                })
                .catch(err => console.log('err in deleting like', err))
        }

        
    }

    return (
            <View style={{height: cardHeight, width: "240%"}}>
                <Modal animationType="fade" transparent={true} visible={warn}>
                    <Text style={{backgroundColor : 'red', marginTop: '50%'}}>This is a Modal</Text>
                    <Button title="close me" onPress={() => setWarn(!warn)}/>
                </Modal> 
                {userToken && <Like onStartShouldSetResponder={likeIt}>
                    <Image source={like ? solidHeart : clearHeart } style={{width: 20, height: 20}}/>
                    <Text style={{color : 'white', fontWeight: 'bold'}}>{String(likeCount)}</Text>
                </Like>}
              
               <TouchableOpacity  
               onPress={()  =>  navigation.navigate('IndividualR', {paramsID: recipe.id})}
               >
               <Image 
                source={{uri : (recipe.img ? recipe.img : Cereal)}}
                style={{width: "50%", height: imageHeight, borderRadius: 3, paddingRight: 20 }}
                resieMode="contain"
                />
                {/* {im()} */}
                <Text style={styles.text}>{recipe.title}</Text>
                <UserPrepTime>
                    <Text style={styles.username}>{recipe.username}</Text>
                    <Text style={styles.prep}>{recipe.minutes} min.</Text>
                </UserPrepTime>
                 </TouchableOpacity>
            </View>
    )
}

export default withNavigation(Recipe);


             
    // const im = ()=>{
    //     if(recipe.img==null){
    //         return(
    //             <Image 
                
    //             source={{uri : Cereal}}
    //             style={{width: "50%", height: imageHeight, borderRadius: 3, paddingRight: 20 }}
    //             resieMode="contain"
                
    //         />
    //         )
    //     }else{
    //         return(
    //             <Image 
                
    //             source={{uri : recipe.img}}
    //             style={{width: "50%", height: imageHeight, borderRadius: 3, paddingRight: 20 }}
    //             resieMode="contain"
                
    //         />
    //         )
    //     }
    // }