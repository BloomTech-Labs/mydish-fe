import * as recipeTypes from '../../../store/recipes/recipeActions';
import { recipeReducer } from '../../../store/recipes/recipeReducer';

test('No recognized action or type returns initial state', () => {
  const initStore = {
    recipeList: [],
    isLoading: false,
    error: null,
  };

  const returnStore = recipeReducer(initStore, {});
  expect(returnStore).toEqual(initStore);

  const returnStore2 = recipeReducer(initStore, { type: 'BAD_TYPE' });
  expect(returnStore2).toEqual(initStore);
});

describe('Fetch Recipe actions return the correct state object', () => {
  test('START_FETCH_RECIPES', () => {
    // We want to test that both `isLoading` and
    //     `error` change. Let's test!
    const initStore = {
      recipeList: [],
      isLoading: false,
      error: 'testError',
    };
    const expectedStore = {
      recipeList: [],
      isLoading: true,
      error: null,
    };

    const returnStore = recipeReducer(initStore, {
      type: recipeTypes.START_FETCH_RECIPES,
    });
    expect(returnStore).toEqual(expectedStore);

    // And let's just make sure they stay the same
    //     if we call our reducer again
    const returnStore2 = recipeReducer(returnStore, {
      type: recipeTypes.START_FETCH_RECIPES,
    });
    expect(returnStore2).toEqual(expectedStore);
  });

  test('FETCH_RECIPES_SUCCESS', () => {
    // The recipes that should be added to our reducer
    const recipesTofetch = [{ title: 'testRecipe1' }, { title: 'testRecipe2' }];

    // initial store
    const initStore = {
      recipeList: [],
      isLoading: false,
      error: null,
    };

    // expected store returned from reducer
    const expectedStore = {
      recipeList: recipesTofetch,
      isLoading: false,
      error: null,
    };
    const action = {
      type: recipeTypes.FETCH_RECIPES_SUCCESS,
      payload: recipesTofetch,
    };

    const returnStore = recipeReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);
  });

  test('FETCH_RECIPES_FAILURE', () => {
    // initial store
    const initStore = {
      recipeList: [],
      isLoading: true,
      error: null,
    };

    // expected store returned from reducer
    const expectedStore = {
      recipeList: [],
      isLoading: false,
      error: 'testError',
    };

    const action = {
      type: recipeTypes.FETCH_RECIPES_FAILURE,
      payload: 'testError',
    };

    const returnStore = recipeReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);
  });
});
