import * as recipeActions from '../../../store/recipes/recipeActions';
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

describe('fetchRecipes action creator', () => {
  test('dispatches START_FETCH_RECIPES', () => {
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
    recipeActions.fetchRecipes()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: recipeActions.START_FETCH_RECIPES,
    });
  });

  test('dispatches FETCH_RECIPES_SUCCESS upon a successful request', async () => {
    const dispatch = jest.fn();

    // Our test responseData, and our mocked axios.get() function
    const responseData = [{ title: 'testRecipe' }];
    axiosWithAuth.mockImplementation(() => {
      return {
        get: () => ({ data: responseData }),
      };
    });

    await recipeActions.fetchRecipes()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: recipeActions.START_FETCH_RECIPES,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: recipeActions.FETCH_RECIPES_SUCCESS,
      payload: responseData,
    });
  });

  test('dispatches FETCH_RECIPES_FAILURE upon an unsuccessful request', async () => {
    const dispatch = jest.fn();

    // Our test responseData, and our mocked axios.get() function
    const errorMessage = 'testError';
    axiosWithAuth.mockImplementation(() => {
      return {
        get: () => {
          throw errorMessage;
        },
      };
    });

    await recipeActions.fetchRecipes()(dispatch);

    // expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: recipeActions.START_FETCH_RECIPES,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: recipeActions.FETCH_RECIPES_FAILURE,
      payload: errorMessage,
    });
  });
});
