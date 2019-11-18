import React, {useState, useEffect}from 'react';
import styles from '../styles/recipe-styles';
import {View,Text,ScrollView, Image, TouchableOpacity, AsyncStorage, Modal, Alert, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import LikeModal from './LikekModal';
import UnlikeModal from './UnlikeModal';
// import {Icon} from 'react-native-elements';
// import Icon from "react-native-vector-icons/FontAwesome";
// import ipad from '../assets/ipadrecipe.jpg';
// const ipad = require('../assets/ipadrecipe.jpg');
import styled from 'styled-components';
import clearHeart from '../assets/orangeBorder.png';
import solidHeart from '../assets/orangeFill.png';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import { setState } from 'expect/build/jestMatchersObject';

var Cereal = "https://i.imgur.com/iYFK1mG.png"

const Recipe = (props) => {
    // console.log('props in <Recipe/>', props.setRecipeList);
    // console.log('cookbook refresh', props.cookbookRefresh);
    let {navigation, cardHeight, imageHeight, recipe} = props;
    const [num, setNum]= useState(1)
    let [like, setLike] = useState(recipe.likedByUser);
    let [likeCount, setLikeCount] = useState(recipe.total_saves);
    let [userToken,setUserToken] = useState(null);
    let [warn, setWarn] = useState(false);
    let [addModal, setAddModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    let [folder, setFolder] = useState([])
    const [categories, setCategories] = useState([])
   
    const courses = ['Breakfast','Brunch','Lunch','Dinner','Dessert','Snack'];
    // console.log('props in Recipe', props.navigation);
    // console.log('recipe in <Recipe/>', recipe);


    const UserPrepTime = styled.View`
        flexDirection: row;
        justifyContent: space-between;
        width: 50%;
        marginBottom: 10%;
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
            setUserToken(token); //the token is used to determine if the <Like> component should be rendered or not
        }
      
       return token;
    }

    const getRecipe = async () => {
       const res =  await axios.get(`https://recipeshare-development.herokuapp.com/recipes/${recipe.id}`);
       let {categories} = res.data;
    //    console.log('categories', categories);
       categories = categories.filter(cat => cat === 'Breakfast' || cat === 'Brunch' || cat === 'Lunch' || 
                                      cat === 'Dinner' || cat === 'Dessert' || cat === 'Snack');
       setCategories(categories);
    }

    useEffect(() => {
        // console.log('props in <Recipe>', navigation.state.routeName);
        getRecipe()
        getToken();
        // console.log('liked? after set', like);
    },[like,likeCount])



    const likeIt = async () => {
        console.log('like pressed');
        // console.log('recipe id: ', recipe.id);
        // console.log('recipe total_saves and liked?', recipe.total_saves, like);
       
        let liked = !like;  //like is the state variable. it gets set after execution of the function likeIt() declared a temp liked variable to execute the logic of this function.
       
        const axiosAuth = await axiosWithAuth();
        if (liked) {
            axiosAuth.post(`https://recipeshare-development.herokuapp.com/cookbook/${recipe.id}`,{})
                .then(res => {
                    setLikeCount(res.data.total_saves);
                    setLike(liked);
                    setAddModal(!addModal);
                })
                .catch(err => console.log('error in posting like', err))
                
        } else {
            axiosAuth.delete(`https://recipeshare-development.herokuapp.com/cookbook/${recipe.id}`)
                .then(res => {
                    console.log('res from unlike', res.data);

                    if (!res.data.total_saves) {
                        setLikeCount(0);
                    } else {
                        setLikeCount(res.data.total_saves);
                    }
                    
                    setLike(liked);

                    const route = navigation.state.routeName;
                    console.log('route in unlike', route);

                    if (route === 'Home') {
                        return;
                    }
                    setRemoveModal(!removeModal);

                    // if (route === "Folder") {
                    //    navigation.pop();
                    // } 
                })
                .catch(err => console.log('err in deleting like', err))
        }
        axiosAuth.get(`https://recipeshare-development.herokuapp.com/recipes/${recipe.id}`)
        .then(res=>{
            // console.log("res.data from id in recipe", res.data.categories)
            setCategories(res.data.categories);
        }).catch(err => console.log("err in recipe categoried by id", err))
    }

    return (
            <View style={{height: cardHeight, width: "240%"}}>

                <LikeModal  categories={categories} text="Recipe added to: " 
                                modal={addModal} setModal={setAddModal}
                                route={navigation.state.routeName}/>

                <UnlikeModal  categories={categories} text="Recipe removed from: "
                                modal={removeModal} setModal={setRemoveModal}  
                                route={navigation.state.routeName} navigate={navigation.pop}/>

                {userToken && <Like onStartShouldSetResponder={likeIt}>
                    <Image source={like ? solidHeart : clearHeart } style={{width: 30, height: 30}}/>
                    <Text style={{color : 'white', fontWeight: 'bold'}}>{String(likeCount)}</Text>
                </Like>}
              
               <TouchableOpacity  onPress={()  =>  navigation.navigate('IndividualR', {paramsID: recipe.id})}>
                    <Image 
                        source={{uri : (recipe.img ? recipe.img : Cereal)}}
                        style={{width: "50%", height: imageHeight, borderRadius: 3, paddingRight: 20 }}
                        />
                        {/* {im()} */}
                        <Text style={styles.text}>{recipe.title}</Text>
                        <UserPrepTime>
                            <Text style={styles.username}>{recipe.username || recipe.author}</Text>
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

        // const checkingForCourse = ()=>{
    //     console.log("categories", categories)
    //     courses.map(cat =>{
    //     console.log("cat before if statement", cat)
    //       if(categories.includes(cat)){
    //         console.log("cat before return", cat)
    //         setFolder(cat)
    //       }})} 
    //       console.log("FOLDER", folder)