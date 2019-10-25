import React from 'react';
import styles from '../styles/recipe-styles';
import {View,Text,ScrollView, Image} from 'react-native';
import {Card, Button, ThemeProvider} from 'react-native-elements';
// import ipad from '../assets/ipadrecipe.jpg';
const ipad = require('../assets/ipadrecipe.jpg');
import styled from 'styled-components';

const Recipe = (props) => {

    const {recipe, height} = props;
    console.log('props in recipe', props);

    const RecipeCard = styled.View`
    flex: 1;
    marginLeft : 10;
    justifyContent: flex-start;
    minWidth: 150;
    marginBottom: 10;
    `;

    const UserCard = styled.View`
      flexDirection : row;
      borderRightWidth : 1;
      justifyContent : space-around;
    `;

    return (
        <>
            {/* <View style={{flex: 1, minWidth: 160, alignItems: 'center'}}> */}
            <RecipeCard>
                <Image 
                    source={ipad}
                    style={{ width: 150, height: height, borderRadius: 15 }}
                    />
                <Text style={styles.text}>Sample Recipe</Text>
                {/* <Button title="Details"/> */}
                <UserCard>
                    <Image source={{uri : "https://fakeimg.pl/50x50/?text=user"}}
                        style={{width: 50, height: 50 }}/>
                    <Text style={styles.username}>Username</Text>
                    <Text style={styles.prep}>Min: Prep Time</Text>
                </UserCard>
                   
              
                

            </RecipeCard>
        </>
    )
}

export default Recipe;