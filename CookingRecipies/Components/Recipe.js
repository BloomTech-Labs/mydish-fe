import React from 'react';
import styles from '../styles/styles';
import {View,Text} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';

const Recipe = () => {
    return (
        <>
        <ThemeProvider>
            <View>
                <Text>Sample Recipes</Text>
                <Button title="Solid Button"/>
            </View>
        </ThemeProvider>
        </>
    )
}

export default Recipe;

