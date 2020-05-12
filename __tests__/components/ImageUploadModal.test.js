import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import ImageUploadModal from '../../components/RecipeImageComponents/ImageUploadModal';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

describe('<ImageUploadModal />', () => {
  const store = createStore(() => {});
  const renderTree = (
    <Provider store={store}>
      <ImageUploadModal />
    </Provider>
  );
  const tree = renderer.create(renderTree).toJSON();
  it('matches snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
