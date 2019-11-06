import React from 'react';
import Search from '../Components/Search';
import renderer from 'react-test-renderer';

test('search snapshot', () => {
    const searchSnap = renderer.create(<Search/>).toJSON();
    expect(searchSnap).toMatchSnapshot();
})



