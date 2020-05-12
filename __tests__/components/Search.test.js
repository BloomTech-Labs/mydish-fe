import 'react-native';
import React from 'react';
import Search from '../../components/Search';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

it('matches snapshot', () => {
  // The Search component has useDispatch(),
  //     so we still need a Provider to tap
  //     into our store.
  const store = createStore(() => {});
  const renderTree = (
    <Provider store={store}>
      <Search />
    </Provider>
  );
  const tree = renderer.create(renderTree).toJSON();
  expect(tree).toMatchSnapshot();
});
