import React from 'react';
import Search from '../../components/Search';
import renderer from 'react-test-renderer';


describe('<Search />', () => {
    it('search renders correctly', () => {
        const searchSnap = renderer.create(<Search />).toJSON();
        expect(searchSnap).toMatchSnapshot();
    })
});



