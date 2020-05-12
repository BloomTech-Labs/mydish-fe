import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const LoginNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: SignUp },
  },
  { initialRouteName: 'Login', headerLayoutPreset: 'center' }
);

export default LoginNavigator;
