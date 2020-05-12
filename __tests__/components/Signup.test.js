import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../../components/SignUp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

test('matches snapshot', () => {
  // The SignUp component only needs the error portion of the store,
  //     so we create a simpler store doing just that:
  const store = createStore(() => ({ auth: { error: null } }));

  // Then we create our smaller SignUp component with the provider
  const renderTree = (
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
  const signupSnap = renderer.create(renderTree).toJSON();
  expect(signupSnap).toMatchSnapshot();
});
