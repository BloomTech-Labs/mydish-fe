import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import RecipeImage from '../../components/RecipeImageComponents/RecipeImage';

describe('<ImageUploadModal />', () => {
  const tree = renderer.create(<RecipeImage />).toJSON();
  it('matches snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
