import {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const AxiosWithAuth = (props) => {

    console.log("axios", props)

    return axios.create({
    headers: {
        Authorization: props
    }
});
        
};

export default AxiosWithAuth;