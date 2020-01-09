import React from "react";
import { useDispatch } from "react-redux";
import { Image, AsyncStorage, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import RecipeNavigator from "./RecipeNavigator";
import CreateNavigator from "./CreateNavigator";
import CookBookNavigator from "./CookbookNavigator";
import Login from "../components/Login";
import styles from "../styles/navigation.styles";
import search from "../assets/Union.png";
import plus from "../assets/add_circle_grey.png";
import logoutImage from "../assets/account_circle.png";
import fork from "../assets/restaurant_grey.png";
import { logoutUser } from "../store/auth/authActions";
import { withNavigation } from "react-navigation";

// This LogoutComponent dispatches an action to logout the user when they
//     click on the signout icon in the bottom nav bar
const LogoutComponent = ({ navigation }) => {
    const dispatch = useDispatch();
    const logout = async () => {
        await AsyncStorage.clear();
        dispatch(logoutUser());
        navigation.navigate("Auth");
    };

    return (
        <TouchableOpacity onPress={logout}>
            <Image style={styles.loginTab} source={logoutImage} />
        </TouchableOpacity>
    );
};
// Gives the above ↑↑ component the ability to navigate
const LogoutComponentNav = withNavigation(LogoutComponent);

const MainNavigator = () => {
    return {
        Home: {
            screen: RecipeNavigator,
            navigationOptions: {
                tabBarLabel: "Explore",
                tabBarIcon: <Image style={styles.homeTab} source={search} />,
                tabBarOnPress: ({ navigation }) => {
                    navigation.push("Home");
                },
            },
        },
        Create: {
            screen: CreateNavigator,
            navigationOptions: {
                tabBarLabel: "Create",
                tabBarIcon: <Image style={styles.createTab} source={plus} />,
                tabBarOnPress: ({ navigation }) => {
                    navigation.push("Create");
                },
            },
        },
        CookBook: {
            screen: CookBookNavigator,
            navigationOptions: {
                tabBarLabel: "CookBook",
                tabBarIcon: <Image style={styles.createTab} source={fork} />,
                tabBarOnPress: ({ navigation }) => {
                    navigation.push("CookBook");
                },
            },
        },

        Profile: {
            screen: Login,
            navigationOptions: {
                tabBarLabel: "Sign Out",
                // This component ↓↓ handles navigating
                tabBarIcon: <LogoutComponentNav />,
            },
        },
    };
};

export default createBottomTabNavigator(MainNavigator(), {
    initialRouteName: "Home",
});
