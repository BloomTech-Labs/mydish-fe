import {AsyncStorage} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage'

async function axiosWithAuth() {
    const token = await AsyncStorage.getItem('userToken');
    console.log(token);
}

export default axiosWithAuth;
