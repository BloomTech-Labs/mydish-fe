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


let fakeImages=["hack","https://imgur.com/P6MJY3E", "https://imgur.com/a/nYjndsf", "https://imgur.com/a/59bk6KQ", "https://imgur.com/a/zL5DFJs"]
let count = 0
const Recipe = (props) => {
    const [img,  setImg] = useState()

    useEffect(()=>{
        count= count+1
        console.log("COUNT", count)
        setImg(fakeImages[count])
    },[])


    //console.log('props in recipe', props);
    let [like, setLike] = React.useState(false);
    // let [likeCount, setLikeCount] = React.useState(props.recipe.likes)  //get likes from recipe handed down via props from the database.

    const RecipeCard = styled.View`
    justifyContent: flex-start;
    width: 130;
    marginLeft: 20;
    marginRight: 20;
    marginBottom: 10;
    marginTop: 10;
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
            <RecipeCard >
               <TouchableOpacity  
               onPress={()  =>  props.navigation.navigate('IndividualR', {paramsID: props.recipe.id})}
               >
                <Like onStartShouldSetResponder={likeIt}>
                    <Image source={like ? solidHeart : clearHeart } style={{width: 20, height: 20}}/>
                    <Text style={{color : 'white', fontWeight: 'bold'}}> 3k</Text>
                </Like>
                <Image 
                    source={{uri : img}}
                    style={{width: 160, height: 250, borderRadius: 20, paddingRight: 20 }}
                    resieMode="contain"
                    
                />
                
                <Text style={styles.text}>{props.recipe.title}</Text>
                <UserCard>
                    <Image source={{uri : "https://fakeimg.pl/50x50/?text=user"}}
                        style={{width: 50, height: 50 }}/>
                    <View style={styles.usercardTxt}>
                        <Text style={styles.username}></Text>
                        <Text style={styles.prep}>Min: {props.recipe.minutes}</Text>
                    </View>
                </UserCard>
                 </TouchableOpacity>
            </RecipeCard>
        </>
    )
}

export default withNavigation(Recipe);