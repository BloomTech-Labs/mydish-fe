import React from "react";
import { AsyncStorage, View, ActivityIndicator, StatusBar } from "react-native";

function AuthLoadingScreen(props) {
    const _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem("userToken");
        props.navigation.navigate(userToken ? "App" : "Auth");
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
    };

    React.useEffect(() => {
        _bootstrapAsync();
    }, []);

    // Render any loading content that you like here

    return (
        <View>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
        </View>
    );
}

export default AuthLoadingScreen;

// class AuthLoadingScreen extends React.Component {
//     componentDidMount() {
//       this._bootstrapAsync();
//     }
//     // Fetch the token from storage then navigate to our appropriate place
//     _bootstrapAsync = async () => {
//       const userToken = await AsyncStorage.getItem('userToken');
//       // console.log('test for token userToken', userToken)

//       // This will switch to the App screen or Auth screen and this loading
//       // screen will be unmounted and thrown away.
//       this.props.navigation.navigate(userToken ? 'App' : 'Auth');
//     };

//     // Render any loading content that you like here
//     render() {
//       return (
//         <View>
//           <ActivityIndicator />
//           <StatusBar barStyle="default" />
//         </View>
//       );
//     }
//   }

//   export default AuthLoadingScreen;
