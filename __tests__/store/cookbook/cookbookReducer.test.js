import * as cookbookTypes from '../../../store/cookbook/cookbookAction';
import { cookbookReducer } from '../../../store/cookbook/cookbookReducer';

test('No recognized action or type returns initial state', () => {
  const initStore = {
    cookbookRecipes: [],
    isLoading: false,
    error: null,
  };

  const returnStore = cookbookReducer(initStore, {});
  expect(returnStore).toEqual(initStore);

  const returnStore2 = cookbookReducer(initStore, { type: 'BAD_TYPE' });
  expect(returnStore2).toEqual(initStore);
});

describe('Fetch Recipe actions return the correct state object', () => {
  test('START_FETCH_COOKBOOK', () => {
    // We want to test that both `isLoading` and
    //     `error` change. Let's test!
    const initStore = {
      cookbookRecipes: [],
      isLoading: false,
      error: 'testError',
    };
    const expectedStore = {
      cookbookRecipes: [],
      isLoading: true,
      error: null,
    };

    const returnStore = cookbookReducer(initStore, {
      type: cookbookTypes.START_FETCH_COOKBOOK,
    });
    expect(returnStore).toEqual(expectedStore);

    // And let's just make sure they stay the same
    //     if we call our reducer again
    const returnStore2 = cookbookReducer(returnStore, {
      type: cookbookTypes.START_FETCH_COOKBOOK,
    });
    expect(returnStore2).toEqual(expectedStore);
  });

  test('FETCH_COOKBOOK_SUCCESS', () => {
    // The recipes that should be added to our reducer
    const recipesTofetch = [{ title: 'testRecipe1' }, { title: 'testRecipe2' }];

    // initial store
    const initStore = {
      cookbookRecipes: [],
      isLoading: false,
      error: null,
    };

    // expected store returned from reducer
    const expectedStore = {
      cookbookRecipes: recipesTofetch,
      isLoading: false,
      error: null,
    };
    const action = {
      type: cookbookTypes.FETCH_COOKBOOK_SUCCESS,
      payload: recipesTofetch,
    };

    const returnStore = cookbookReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);
  });

  test('FETCH_COOKBOOK_FAILURE', () => {
    // initial store
    const initStore = {
      cookbookRecipes: [],
      isLoading: true,
      error: null,
    };

    // expected store returned from reducer
    const expectedStore = {
      cookbookRecipes: [],
      isLoading: false,
      error: 'testError',
    };

    const action = {
      type: cookbookTypes.FETCH_COOKBOOK_FAILURE,
      payload: 'testError',
    };

    const returnStore = cookbookReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);
  });
});

describe('Fetch All Cookbook actions return the correct state object', () => {
  test('START_FETCH_ALL_COOKBOOK', () => {
    const initStore = {
      entireCookbook: [],
      isLoading: false,
      error: 'testError',
    };
    const expectedStore = {
      entireCookbook: [],
      isLoading: true,
      error: null,
    };

    const returnStore = cookbookReducer(initStore, {
      type: cookbookTypes.START_FETCH_ALL_COOKBOOK,
    });
    expect(returnStore).toEqual(expectedStore);

    const returnStore2 = cookbookReducer(returnStore, {
      type: cookbookTypes.START_FETCH_ALL_COOKBOOK,
    });
    expect(returnStore2).toEqual(expectedStore);
  });

  test('FETCH_ALL_COOKBOOK_SUCCESS', () => {
    const recipesTofetch = [{ title: 'testRecipe1' }, { title: 'testRecipe2' }];

    const initStore = {
      entireCookbook: [],
      isLoading: false,
      error: null,
    };

    const expectedStore = {
      entireCookbook: recipesTofetch,
      isLoading: false,
      error: null,
    };
    const action = {
      type: cookbookTypes.FETCH_ALL_COOKBOOK_SUCCESS,
      payload: recipesTofetch,
    };

    const returnStore = cookbookReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);
  });

  test('FETCH_ALL_COOKBOOK_FAILURE', () => {
    const initStore = {
      entireCookbook: [],
      isLoading: true,
      error: null,
    };

    const expectedStore = {
      entireCookbook: [],
      isLoading: false,
      error: 'testError',
    };

    const action = {
      type: cookbookTypes.FETCH_ALL_COOKBOOK_FAILURE,
      payload: 'testError',
    };

    const returnStore = cookbookReducer(initStore, action);
    expect(returnStore).toEqual(expectedStore);
  });
});
