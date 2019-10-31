import React from 'react';
import 'react-native';
import { AsyncStorage } from 'react-native'; 
import asyncstorage from 'react-native';
import renderer from 'react-test-renderer'
import {render, fireEvent} from 'react-native-testing-library';
import Login from '../Components/Login';

test('sanity check', () => {
    expect(5).toBe(5);
})


test.skip('login snapshot', () => {
    const loginSnap = renderer.create(<Login/>).toJSON();
    expect(loginSnap).toMatchSnapshot();
})


// test('Login Renders', () => {
//     const Login = render(<Login/>);
//     console.log(Login);
// })

