import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';


const Navigation = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: MainNavigator,
    Auth: AuthNavigator
  },{initialRouteName: 'AuthLoading'})

const AppContainer = createAppContainer(Navigation);

export default AppContainer;
