import React from 'react';
import renderer from 'react-test-renderer';
import signUp from '../Components/signUp';

test.skip('signup snapshot', () => {
    const signupSnap = renderer.create(<signUp/>).toJSON();
    expect(signupSnap).toMatchSnapshot();
})

