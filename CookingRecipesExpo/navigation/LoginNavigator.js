import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/Login';
import Signup from '../components/SignUp'

const LoginNavigator = createStackNavigator({
    Login : {screen : Login},
    Signup : {screen : Signup}
})

export default LoginNavigator;
