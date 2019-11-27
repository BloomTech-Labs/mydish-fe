import React, {useState, useEffect}from 'react';
import styles from '../styles/recipe-styles';
import {View,Text,Image, TouchableOpacity, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';
import LikeModal from './LikekModal';
import UnlikeModal from './UnlikeModal';
import Like from './StyledComponents/Like';
import UserPrepTime from './StyledComponents/UserPrepTime';
import clearHeart from '../assets/orangeBorder.png';
import solidHeart from '../assets/orangeFill.png';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import placeholder from '../assets/recipe-image-placeholder.png';


const Recipe = (props) => {
    // console.log('props in <Recipe/>', props.setRecipeList);
    // console.log('cookbook refresh', props.cookbookRefresh);
    const {navigation, cardHeight, imageHeight, recipe} = props;
    const [forks, setForks] = useState([]);
    let [like, setLike] = useState(recipe.likedByUser);
    let [likeCount, setLikeCount] = useState(recipe.total_saves);
    let [userToken,setUserToken] = useState(null);
    let [addModal, setAddModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [categories, setCategories] = useState([])
    const stylePlaceholder = {width: "50%", height: imageHeight, borderRadius: 3, paddingRight: 20 };

    const getToken = async () => {  
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            setUserToken(token); //the token is used to determine if the <Like> component should be rendered or not
        }
      
       return token;
    }

    const getRecipe = async () => {
        try {
            const res =  await axios.get(`https://recipeshare-development.herokuapp.com/recipes/${recipe.id}`);
            let {categories} = res.data;
            categories = categories.filter(cat => cat === 'Breakfast' || cat === 'Brunch' || cat === 'Lunch' || 
                                            cat === 'Dinner' || cat === 'Dessert' || cat === 'Snack');
            setCategories(categories);
        } catch(err) {
            console.log('error in getting recipe by id', recipe.id);
        }
    }

    // function getForks() {
    //     axios.get(`https://recipeshare-development.herokuapp.com/recipes/all`)
    //         .then(res => {
    //             const allRecipes = res.data;
    //             // console.log('allRecipes in getForks() of <Recipe>', allRecipes);
    //             // allRecipes.forEach(rec => console.log(rec.ancestor))
    //             const children = allRecipes.filter(rec => rec.ancestor === recipe.id);
    //             console.log(`forks in getForks() for <Recipe>: ${recipe.id}`, children);
    //             setForks(children);
    //         })
    //         .catch(err => console.log(err));
    // }

    useEffect(() => {
        // getForks();
        getRecipe()
        getToken();
    },[like,likeCount])

    const likeIt = async () => {
       
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

                    if (!res.data.total_saves) {
                        setLikeCount(0);
                    } else {
                        setLikeCount(res.data.total_saves);
                    }
                    
                    setLike(liked);

                    const route = navigation.state.routeName;
                    // console.log('route in unlike', route);

                    if (route === 'Home') {
                        return;
                    }
                    setRemoveModal(!removeModal);
                })
                .catch(err => console.log('err in deleting like', err))
        }
    }

    return (
            <View style={{height: cardHeight, width: "240%"}}>

                <LikeModal  categories={categories} text="Recipe added to: " 
                                modal={addModal} setModal={setAddModal}
                                route={navigation.state.routeName}/>

                <UnlikeModal  categories={categories} text="Recipe removed from: "
                                modal={removeModal} setModal={setRemoveModal}  
                                route={navigation.state.routeName} navigate={navigation.pop}/>

                {userToken && 
                <Like onStartShouldSetResponder={likeIt}>
                    <Image source={like ? solidHeart : clearHeart } style={{width: 30, height: 30}}/>
                    <Text style={{color : 'white', fontWeight: 'bold'}}>{String(likeCount)}</Text>
                </Like>}
              
               <TouchableOpacity onPress={() => navigation.navigate('IndividualR', {recipeID: recipe.id, recipe})}>
                    <Image  source={recipe.img ? {uri : recipe.img} : placeholder}
                            style={stylePlaceholder}/>

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