import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { View } from 'react-native';
import {temp} from './Login.js'


// const retrieveItem = async () => {
//     try {
//       const retrievedItem =  await AsyncStorage.getItem('uset');
//       const item = JSON.parse(retrievedItem);
//       return item;
//       console.log('item from axios with auth')
//     } catch (error) {
//       console.log(error.message);
//     }
//     return
//   }
const AxiosWithAuth = async () => {

    const userToken =  await AsyncStorage.getItem('userToken');
        // const item = JSON.parse(retrievedItem);
        return axios.create({
            headers: {
                Authorization: userToken
            }
        })
    }


    // try {
    //     const userToken =  await AsyncStorage.getItem('userToken');
    //     // const item = JSON.parse(retrievedItem);
    //     return axios.create({
    //         headers: {
    //             Authorization: userToken
    //         }
    //     })
    // } catch (error) {
    //     console.log('error.message', error.message);
    //     return error.message;

    //return
    // console.log('item from axios with auth', item)
    // console.log('trying to debug axios with auth', boo)
   
    //     console.log('axioswithauth', temp)
    //     return axios.create({
    //         headers: {
    //             Authorization: temp[temp.length-1]
    //         }
    //     });
        

    //     return (<View></View>)


export default AxiosWithAuth;