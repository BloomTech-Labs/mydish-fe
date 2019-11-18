import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../components/signUp';

test.skip('signup snapshot', () => {
    const signupSnap = renderer.create(<SignUp/>).toJSON();
    expect(signupSnap).toMatchSnapshot();
})

