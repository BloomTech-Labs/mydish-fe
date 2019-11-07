import React from 'react';
import 'react-native';
import { AsyncStorage } from 'react-native'; 
import asyncstorage from 'react-native';
import renderer from 'react-test-renderer'
import {render, fireEvent} from 'react-native-testing-library';
import Login from '../../Components/Login';


test.skip('login snapshot', () => {
    const loginSnap = renderer.create(<Login/>).toJSON();
    expect(loginSnap).toMatchSnapshot();
})

describe('<Login/>', () => {
    it('Username and Password accepts input', () => {
        const {getByTestId} = render(<Login/>);
        const UserInput = getByTestId('username');
        const PassInput = getByTestId('password');
        fireEvent.changeText(UserInput, 'Amir');
        expect(UserInput.props.value).toEqual('Amir');
        fireEvent.changeText(PassInput, 'password');
        expect(PassInput.props.value).toEqual('password');
    })


})




// test('Login Renders', () => {
//     const Login = render(<Login/>);
//     console.log(Login);
// })

