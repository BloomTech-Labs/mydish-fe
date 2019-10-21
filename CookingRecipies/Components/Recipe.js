import React from 'react';
// import styles from '../styles/styles';
import {View,Text} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';

const Recipe = (props) => {
    console.log('props in recipes', props);

    const btnClk = () => {
        console.log('native element button has been clicked');
    }

    return (
        <>
        <ThemeProvider>
            <View>
                <Text>Sample Recipes</Text>
                <Button title="Solid Button" onClick={btnClk}/>
            </View>
        </ThemeProvider>
        </>
    )
}

export default Recipe;

