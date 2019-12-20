import axios from "axios";
import { AsyncStorage } from "react-native";

const axiosWithAuth = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const baseURL = "https://recipeshare-development.herokuapp.com/";
    return axios.create({ baseURL, headers: { Authorization: userToken } });
};

export default axiosWithAuth;
