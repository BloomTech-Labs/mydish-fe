import React from 'react';
import {Text, View} from 'react-native';

const HelloWorld = ({name}) => {
    const message = `Hello ${name}`;

    return (
        <View>
            <Text testID="hw">{message}</Text>)
        </View>
    )
}

export default HelloWorld;

