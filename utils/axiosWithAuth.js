import axios from "axios";
import { AsyncStorage } from "react-native";
import { URL } from "react-native-dotenv";
// import AsyncStorage from '@react-native-community/async-storage'

const checkToken = async () => {
    return await AsyncStorage.getItem("userToken");
};

const axiosWithAuth = () => {
    const baseURL = URL || "https://recipeshare-development.herokuapp.com/";
    return axios.create({ baseURL, headers: { Authorization: checkToken() } });
};

export default axiosWithAuth;
