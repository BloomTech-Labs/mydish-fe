import * as cookbookActions from '../../../store/cookbook/cookbookAction';
import axiosWithAuth from '../../../utils/axiosWithAuth';
jest.mock('../../../utils/axiosWithAuth');

beforeEach(() => {
  jest.resetAllMocks();
});

test('axiosWithAuth is mocked', () => {
  // Test to make sure we can mock our axiosWithAuth
  //     function to return an object with a get method
  axiosWithAuth.mockImplementation(() => {
    return {
      get: () => ({}),
    };
  });
  const test = axiosWithAuth();
  expect(typeof test).toBe('object');
  expect(typeof test.get).toBe('function');
  expect(test.get()).toEqual({});
});

describe('fetchCookbook action creator', () => {
  test('dispatches START_FETCH_COOKBOOK', () => {
    axiosWithAuth.mockImplementation(() => {
      return {
        get: () => ({}),
      };
    });
    // Turn dispatch into a simple jest function.
    // This means that we won't dash to our reducer, and
    //     we can instead check for our dispatch
    //     "toHaveBeenCalledWith" the correct action.
    const dispatch = jest.fn();
    cookbookActions.fetchCookbook()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.START_FETCH_COOKBOOK,
    });
  });

  test('dispatches FETCH_COOKBOOK_SUCCESS upon a successful request', async () => {
    const dispatch = jest.fn();

    // Our test responseData, and our mocked axiosWithAuth().get() function
    const responseData = [{ title: 'testCookbookTitle' }];
    axiosWithAuth.mockImplementation(() => {
      return {
        get: () => ({ data: responseData }),
      };
    });

    await cookbookActions.fetchCookbook()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.START_FETCH_COOKBOOK,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.FETCH_COOKBOOK_SUCCESS,
      payload: responseData,
    });
  });

  test('dispatches FETCH_COOKBOOK_FAILURE upon an unsuccessful request', async () => {
    const dispatch = jest.fn();

    // Our test responseData, and our mocked axiosWithAuth().get() function
    const errorMessage = 'testError';
    axiosWithAuth.mockImplementation(() => {
      return {
        get: () => {
          throw errorMessage;
        },
      };
    });

    await cookbookActions.fetchCookbook()(dispatch);

    // expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.START_FETCH_COOKBOOK,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.FETCH_COOKBOOK_FAILURE,
      payload: errorMessage,
    });
  });
});

describe('getAllCookbookRecipes action creator', () => {
  test('dispatches START_FETCH_ALL_COOKBOOK', () => {
    axiosWithAuth.mockImplementation(() => {
      return {
        get: () => ({}),
      };
    });
    const dispatch = jest.fn();
    cookbookActions.getAllCookbookRecipes()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.START_FETCH_ALL_COOKBOOK,
    });
  });

  test('dispatches FETCH_ALL_COOKBOOK_SUCCESS upon a successful request', async () => {
    const dispatch = jest.fn();

    const responseData = [{ title: 'testCookbookTitle' }];
    axiosWithAuth.mockImplementation(() => {
      return {
        get: () => ({ data: responseData }),
      };
    });

    await cookbookActions.getAllCookbookRecipes()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.START_FETCH_ALL_COOKBOOK,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.FETCH_ALL_COOKBOOK_SUCCESS,
      payload: responseData,
    });
  });

  test('dispatches FETCH_ALL_COOKBOOK_FAILURE upon an unsuccessful request', async () => {
    const dispatch = jest.fn();

    const errorMessage = 'testError';
    axiosWithAuth.mockImplementation(() => {
      return {
        get: () => {
          throw errorMessage;
        },
      };
    });

    await cookbookActions.getAllCookbookRecipes()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.START_FETCH_ALL_COOKBOOK,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: cookbookActions.FETCH_ALL_COOKBOOK_FAILURE,
      payload: errorMessage,
    });
  });
});
