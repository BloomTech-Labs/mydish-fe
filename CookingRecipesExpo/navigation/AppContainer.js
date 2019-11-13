import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import AuthLoadingScreen from './AuthLoadingScreen';
import HeaderNav from './HeaderNav';

const Navigation = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: MainNavigator,
    Logo: HeaderNav,
    Auth: AuthNavigator
  },{initialRouteName: 'AuthLoading'})

const AppContainer = createAppContainer(Navigation);

export default AppContainer;
