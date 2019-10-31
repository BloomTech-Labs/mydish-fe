import React from 'react';
import renderer from 'react-test-renderer';
import signUp from '../Components/signUp';


test('signup snapshot', () => {
    const signupSnap = renderer.create(<signUp/>).toJSON();
    expect(signupSnap).toMatchSnapshot();
})