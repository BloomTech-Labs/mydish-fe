import * as authActions from '../../../store/auth/authActions';
import { AsyncStorage } from 'react-native';
import axiosWithAuth from '../../../utils/axiosWithAuth';
jest.mock('../../../utils/axiosWithAuth');

beforeEach(() => {
  jest.resetAllMocks();
});

test('axiosWithAuth is mocked', () => {
  // Test to make sure we can mock our axiosWithAuth
  //     function to return an object with a post method
  axiosWithAuth.mockImplementation(() => {
    return {
      post: () => ({}),
    };
  });
  const test = axiosWithAuth();
  expect(typeof test).toBe('object');
  expect(typeof test.post).toBe('function');
  expect(test.post()).toEqual({});
});

describe('LoginUser action creator', () => {
  test('dispatches START_LOGIN', () => {
    // Turn dispatch into a simple jest function.
    // This means that we won't dash to our reducer, and
    //     we can instead check for our dispatch
    //     "toHaveBeenCalledWith" the correct action.
    const dispatch = jest.fn();
    axiosWithAuth.mockImplementation(() => {
      return {
        post: () => ({
          data: { token: { token: 'test' }, user: { id: 1 } },
        }),
      };
    });

    authActions.loginUser()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.START_LOGIN,
    });
  });

  test('dispatches LOGIN_SUCCESS and a true success upon a successful request', async () => {
    const dispatch = jest.fn();

    // Our test responseData, and our mocked
    //     axiosWithAuth().post() function
    const responseData = { token: { token: 'test' }, user: { id: 1 } };
    axiosWithAuth.mockImplementation(() => {
      return {
        post: () => ({ data: responseData }),
      };
    });
    // Our AsyncStorage mock
    AsyncStorage.multiSet = jest.fn(() => {});

    const success = await authActions.loginUser()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.START_LOGIN,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.LOGIN_SUCCESS,
      payload: responseData,
    });
    expect(success).toBe(true);
  });

  test('dispatches LOGIN_FAILURE and a false success upon an unsuccessful request', async () => {
    const dispatch = jest.fn();
    const errorMessage = 'testError';
    // We need axiosWithAuth() to return an object.
    // That object needs a post() method that throws
    //     this specifically formatted error. Neat!
    axiosWithAuth.mockImplementation(() => {
      return {
        post: () => {
          throw {
            response: { data: { message: errorMessage } },
          };
        },
      };
    });

    const success = await authActions.loginUser()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.START_LOGIN,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.LOGIN_FAILURE,
      payload: errorMessage,
    });
    expect(success).toBe(false);
  });
});

describe('registerUser action creator', () => {
  test('dispatches START_REGISTER', () => {
    const dispatch = jest.fn();
    axiosWithAuth.mockImplementation(() => {
      return {
        post: () => ({}),
      };
    });
    authActions.registerUser()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.START_REGISTER,
    });
  });

  test('dispatches REGISTER_SUCCESS and a true success upon a successful request', async () => {
    const dispatch = jest.fn();
    const responseData = { token: { token: 'test' }, user: { id: 1 } };
    axiosWithAuth.mockImplementation(() => {
      return {
        post: () => ({ data: responseData }),
      };
    });
    // Our AsyncStorage mock
    AsyncStorage.multiSet = jest.fn(() => {});

    const success = await authActions.registerUser()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.START_REGISTER,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.REGISTER_SUCCESS,
      payload: responseData,
    });
    expect(success).toBe(true);
  });

  test('dispatches REGISTER_FAILURE and a false success upon an unsuccessful request', async () => {
    const dispatch = jest.fn();

    // Our test responseData, and our mocked
    //     axiosWithAuth().post() function
    const errorMessage = 'testError';
    axiosWithAuth.mockImplementation(() => {
      return {
        post: () => {
          throw {
            response: { data: { message: errorMessage } },
          };
        },
      };
    });

    const success = await authActions.registerUser()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.START_REGISTER,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: authActions.REGISTER_FAILURE,
      payload: errorMessage,
    });
    expect(success).toBe(false);
  });
});
