import {createStackNavigator} from 'react-navigation-stack';
import Login from '../components/Login';
import signup from '../components/signUp';

const LoginNavigator = createStackNavigator({
    Login : {screen : Login},
<<<<<<< HEAD
    signup : {screen : signup}
})
=======
    Signup : {screen : Signup}
},
{initialRouteName : 'Login'})
>>>>>>> a0fa37828a25531aa56d77a58f1daee171dc2ac6

export default LoginNavigator;
