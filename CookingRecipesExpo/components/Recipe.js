import React, {useState, useEffect}from 'react';
import styles from '../styles/recipe-styles';
import {View,Text,ScrollView, Image, TouchableOpacity, AsyncStorage, Modal, Alert, Button} from 'react-native';
import { withNavigation } from 'react-navigation'
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
    let [modal, setModal] = useState(false);
    let [folder, setFolder] = useState([])
    let [categories, setCategories] = useState([])
   
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

    useEffect(() => {
        getToken();
        // console.log('liked? after set', like);
    },[like,likeCount])



    const likeIt = async () => {
        console.log('like pressed');
        console.log('recipe id: ', recipe.id);
        console.log('recipe total_saves and liked?', recipe.total_saves, like);
        // console.log('props.navigation', props.navigation);
        let liked = !like;  //like is the state variable. it gets set after execution of the function likeIt() declared a temp liked variable to execute the logic of this function.
        // if (liked === true ) { // unliking will remove the recipe from the database
        //     //popup a modal warning the recipe will be deleted from the entire database
        //     setWarn(true);
        //     // return;
        // }
        // console.log('liked? before set', like);  //false
        const axiosAuth = await axiosWithAuth();
        if (liked) {
            axiosAuth.post(`https://recipeshare-development.herokuapp.com/cookbook/${recipe.id}`,{})
                .then(res => {
                    setLikeCount(res.data.total_saves);
                    
                    const route = props.navigation.state.routeName;
                    // console.log('route', route);
                    // if (route == "Home") {
                        //     props.navigation.push('Home');
                        // } else {
                            //     props.navigation.push('Courses');
                            // }
                    setLike(liked);
                    setModal(!modal);
                })
                .catch(err => console.log('error in posting like', err))
                
        } else {
            axiosAuth.delete(`https://recipeshare-development.herokuapp.com/cookbook/${recipe.id}`)
                .then(res => {
                    console.log('res from unlike', res.data);
                    
                    // const filtered = props.recipeList.filter(rec => {
                    //     return rec.id !== recipe.id;
                    // })
                    // console.log('filtered length vs original', filtered.length, props.recipeList.length);

                    // props.setRecipeList(filtered);

                    if (!res.data.total_saves) {
                        setLikeCount(0);
                    } else {
                        setLikeCount(res.data.total_saves);
                    }
                    
                    setLike(liked);
                    // props.navigation.pop();
                    const route = navigation.state.routeName;
                    console.log('route in unlike', route);
                    if (route === "Folder") {
                        // props.navigation.pop();
                       navigation.pop();
                    //    navigation.push('CookBook');
                    } 
                    // console.log('route', route);
                    // if (route == "Home") {
                    //     props.navigation.push('Home');
                    // } else {
                    //     props.navigation.push('Courses');
                    // }
                })
                .catch(err => console.log('err in deleting like', err))
        }
        axiosAuth.get(`https://recipeshare-development.herokuapp.com/recipes/${recipe.id}`)
        .then(res=>{
            console.log("res.data from id in recipe", res.data.categories)
            setCategories(res.data.categories);
        }).catch(err => console.log("err in recipe categoried by id", err))
        
        checkingForCourse()
    }
    // const checkingForCourse = ()=>{
    //     console.log("categories", categories)
    //     courses.map(cat =>{
    //     console.log("cat before if statement", cat)
    //       if(categories.includes(cat)){
    //         console.log("cat before return", cat)
    //         setFolder(cat)
    //       }})} 
    //       console.log("FOLDER", folder)
    return (
            <View style={{height: cardHeight, width: "240%"}}>
                {<Modal animationType="fade" transparent={true} visible={modal}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 50}}>
                        <View style={{borderWidth: 5, borderRadius: 10, backgroundColor: 'white', padding: 40, borderColor:"#8FCC70"}}>
                        <Text style={{textAlign: 'center'}}>This recipe can be found in its respective folder in CookBook!</Text>
                        {/* <Text style={{textAlign: 'center'}}>{String(props.courseType)}</Text> */}
                        <Button title="Got it!" color='#8FCC70' borderColor="#8FCC70" onPress={() => setModal(!modal)}/>
                        </View>
                    </View>
                </Modal>  }
                {userToken && <Like onStartShouldSetResponder={likeIt}>
                    <Image source={like ? solidHeart : clearHeart } style={{width: 30, height: 30}}/>
                    <Text style={{color : 'white', fontWeight: 'bold'}}>{String(likeCount)}</Text>
                </Like>}
              
               <TouchableOpacity  
               onPress={()  =>  navigation.navigate('IndividualR', {paramsID: recipe.id})}
               >
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