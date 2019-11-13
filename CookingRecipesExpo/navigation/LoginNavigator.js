import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/Login';
import signup from '../components/signUp';

const LoginNavigator = createStackNavigator({
    Login : {screen : Login},
    signup : {screen : signup}
})

export default LoginNavigator;
