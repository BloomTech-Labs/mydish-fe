import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-native-testing-library';
import Login from '../../components/Login';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

test('login snapshot', () => {
  // The login component only needs the error portion of the store,
  //     so we create a simpler store doing just that:
  const store = createStore(() => ({ auth: { error: null } }));

  // Then we create our smaller Login component with the provider
  const renderTree = (
    <Provider store={store}>
      <Login />
    </Provider>
  );

  const loginSnap = renderer.create(renderTree).toJSON();
  expect(loginSnap).toMatchSnapshot();
});

describe('<Login/>', () => {
  it('Username and Password accepts input', () => {
    const store = createStore(() => ({ auth: { error: null } }));

    const renderTree = (
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const { getByTestId } = render(renderTree);
    const UserInput = getByTestId('username');
    const PassInput = getByTestId('password');
    fireEvent.changeText(UserInput, 'Amir');
    expect(UserInput.props.value).toEqual('Amir');
    fireEvent.changeText(PassInput, 'password');
    expect(PassInput.props.value).toEqual('password');
  });
});
