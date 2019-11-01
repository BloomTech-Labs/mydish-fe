import {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const AxiosWithAuth = async () => {

    try {
        const token = await AsyncStorage.getItem('userToken');
        console.log('token', token);
    } 

    catch(err) {
        console.log(err);
    }

    // return axios.create({
    //     headers: {
    //         Authorization: token
    //     }
    // });
};

export default AxiosWithAuth;