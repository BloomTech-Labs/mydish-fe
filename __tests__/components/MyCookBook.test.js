import 'react-native';
import React from 'react';
import MyCookBook from '../../components/MyCookBook';
import renderer from 'react-test-renderer';

it('matches snapshot', () => {
  const tree = renderer.create(<MyCookBook />).toJSON();
  expect(tree).toMatchSnapshot();
});
