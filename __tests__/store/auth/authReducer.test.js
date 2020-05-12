import * as authTypes from '../../../store/auth/authActions';
import { authReducer } from '../../../store/auth/authReducer';

test('No recognized action or type returns initial state', () => {
  const initStore = {
    userId: null,
    isAuthorizing: false,
    error: 'testError',
  };

  const returnStore = authReducer(initStore, {});
  expect(returnStore).toEqual(initStore);

  const returnStore2 = authReducer(initStore, { type: 'BAD_TYPE' });
  expect(returnStore2).toEqual(initStore);
});

describe('Login actions return the correct state object', () => {
  test('START_LOGIN', () => {
    // We want to test that both `isAuthorizing` and
    //     `error` change. Let's test!
    const initStore = {
      userId: null,
      isAuthorizing: false,
      error: 'testError',
    };
    const expectedStore = {
      userId: null,
      isAuthorizing: true,
      error: null,
    };

    const returnStore = authReducer(initStore, {
      type: authTypes.START_LOGIN,
    });
    expect(returnStore).toEqual(expectedStore);

    // And let's just make sure they stay the same
    //     if we call our reducer again
    const returnStore2 = authReducer(returnStore, {
      type: authTypes.START_LOGIN,
    });
    expect(returnStore2).toEqual(expectedStore);
  });

  test('LOGIN_SUCCESS', () => {
    const initStore = {
      userId: null,
      isAuthorizing: true,
      error: null,
    };
    const expectedStore = {
      userId: 123,
      isAuthorizing: false,
      error: null,
    };
    const action = {
      type: authTypes.LOGIN_SUCCESS,
      payload: { cook_id: 123 },
    };

    const returnStore = authReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);

    // Let's test with a different userId!
    const expectedStore2 = {
      userId: 456,
      isAuthorizing: false,
      error: null,
    };
    const action2 = {
      type: authTypes.LOGIN_SUCCESS,
      payload: { cook_id: 456 },
    };
    const returnStore2 = authReducer(returnStore, action2);
    expect(returnStore2).toEqual(expectedStore2);
  });

  test('LOGIN_FAILURE', () => {
    const initStore = {
      userId: null,
      isAuthorizing: true,
      error: null,
    };
    const expectedStore = {
      userId: null,
      isAuthorizing: false,
      error: 'testError',
    };
    const action = {
      type: authTypes.LOGIN_FAILURE,
      payload: 'testError',
    };

    const returnStore = authReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);
  });
});

describe('Register actions return the correct state object', () => {
  test('START_REGISTER', () => {
    // We want to test that both `isAuthorizing` and
    //     `error` change. Let's test!
    const initStore = {
      userId: null,
      isAuthorizing: false,
      error: 'testError',
    };
    const expectedStore = {
      userId: null,
      isAuthorizing: true,
      error: null,
    };

    const returnStore = authReducer(initStore, {
      type: authTypes.START_REGISTER,
    });
    expect(returnStore).toEqual(expectedStore);

    // And let's just make sure they stay the same
    //     if we call our reducer again
    const returnStore2 = authReducer(returnStore, {
      type: authTypes.START_REGISTER,
    });
    expect(returnStore2).toEqual(expectedStore);
  });

  test('REGISTER_SUCCESS', () => {
    const initStore = {
      userId: null,
      isAuthorizing: true,
      error: null,
    };
    const expectedStore = {
      userId: 789,
      isAuthorizing: false,
      error: null,
    };
    const action = {
      type: authTypes.REGISTER_SUCCESS,
      payload: { cook_id: 789 },
    };

    const returnStore = authReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);

    // Let's test with a different userId!
    const expectedStore2 = {
      userId: 12,
      isAuthorizing: false,
      error: null,
    };
    const action2 = {
      type: authTypes.REGISTER_SUCCESS,
      payload: { cook_id: 12 },
    };
    const returnStore2 = authReducer(returnStore, action2);
    expect(returnStore2).toEqual(expectedStore2);
  });

  test('REGISTER_FAILURE', () => {
    const initStore = {
      userId: null,
      isAuthorizing: true,
      error: null,
    };
    const expectedStore = {
      userId: null,
      isAuthorizing: false,
      error: 'testError',
    };
    const action = {
      type: authTypes.REGISTER_FAILURE,
      payload: 'testError',
    };

    const returnStore = authReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);
  });
});
