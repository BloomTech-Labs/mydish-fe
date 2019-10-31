import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import MyCookBook from '../Components/MyCookBook';

test.skip('Cookbook snapshot', () => {
    const CookbookSnap = renderer.create(<MyCookBook/>).toJSON();
    expect(CookbookSnap).toMatchSnapshot();
})

