import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { AsyncStorage } from "react-native";

const Navigation = tokenBool => createSwitchNavigator(
    {
        App: MainNavigator,
        Auth: AuthNavigator,
    },
    { initialRouteName: tokenBool ? "App" : "Auth" },
);

const checkToken = async () => {
    return await AsyncStorage.getItem("userToken");
};

const AppContainer = createAppContainer(Navigation(checkToken()));

export default AppContainer;
