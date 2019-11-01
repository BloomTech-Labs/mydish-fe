import {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {wow} from "./Login.js";

export const AxiosWithAuth = () => {
    console.log(wow)
    if(wow!=null){
        console.log("axios", wow[0])
    }
    

    return axios.create({
    headers: {
        Authorization: wow[0]
    }
});
        
};

export default AxiosWithAuth;