import axios from 'axios';
import {AsyncStorage} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage'

async function axiosWithAuth() {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('userToken', userToken);
    // return axios.create({headers : {'Content-Type': null, Authorization : userToken}})
    return axios.create({headers : {Authorization : userToken}})
}

export default axiosWithAuth;
