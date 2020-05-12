import * as types from '../../../store/singleRecipe/singleRecipeActions';
import { singleRecipeReducer } from '../../../store/singleRecipe/singleRecipeReducer';

const initState = {
  recipe: {
    title: null,
    notes: null,
    steps: [],
    ingredients: [],
  },
  isLoading: false,
  error: null,
  editMode: false,
};

describe('FETCH actions', () => {
  test('START_FETCH_RECIPE', () => {
    const initialState = {
      ...initState,
      error: 'TestError',
    };
    const expectedState = {
      ...initState,
      error: null,
      isLoading: true,
      editMode: false,
    };

    const returnState = singleRecipeReducer(initialState, {
      type: types.START_FETCH_RECIPE,
    });

    expect(returnState).toEqual(expectedState);
  });
  test('FETCH_RECIPE_SUCCESS', () => {
    const action = {
      type: types.FETCH_RECIPE_SUCCESS,
      payload: {
        title: 'testTitle',
        notes: 'testNotes',
        steps: [1, 2, 3],
        ingredients: [4, 5, 6],
      },
    };
    const initialState = {
      ...initState,
      isLoading: true,
    };
    const expectedState = {
      ...initState,
      isLoading: false,
      recipe: action.payload,
    };

    const returnState = singleRecipeReducer(initialState, action);

    expect(returnState).toEqual(expectedState);
  });
  test('FETCH_RECIPE_FAILURE', () => {
    const action = {
      type: types.FETCH_RECIPE_FAILURE,
      payload: 'testError',
    };
    const initialState = {
      ...initState,
      error: null,
      isLoading: true,
    };
    const expectedState = {
      ...initState,
      error: 'testError',
    };

    const returnState = singleRecipeReducer(initialState, action);

    expect(returnState).toEqual(expectedState);
  });
});

describe('UPDATE actions', () => {
  test('START_UPDATE_RECIPE', () => {
    const initialState = {
      ...initState,
      error: 'TestError',
    };
    const expectedState = {
      ...initState,
      error: null,
    };

    const returnState = singleRecipeReducer(initialState, {
      type: types.START_UPDATE_RECIPE,
    });

    expect(returnState).toEqual(expectedState);
  });
  test('UPDATE_RECIPE_SUCCESS', () => {
    const action = {
      type: types.UPDATE_RECIPE_SUCCESS,
      payload: {
        title: 'testTitle',
        notes: 'testNotes',
        steps: [1, 2, 3],
        ingredients: [4, 5, 6],
      },
    };
    const initialState = {
      ...initState,
      recipe: {
        title: 'initTitle',
        notes: 'initNotes',
        steps: [12, 12, 12],
        ingredients: [12, 12, 12],
      },
      isLoading: true,
    };
    const expectedState = {
      ...initState,
      isLoading: false,
      recipe: action.payload,
    };

    const returnState = singleRecipeReducer(initialState, action);

    expect(returnState).toEqual(expectedState);
  });
  test('UPDATE_RECIPE_FAILURE', () => {
    const action = {
      type: types.UPDATE_RECIPE_FAILURE,
      payload: 'testError',
    };
    const initialState = {
      ...initState,
      error: null,
      isLoading: true,
    };
    const expectedState = {
      ...initState,
      error: 'testError',
    };

    const returnState = singleRecipeReducer(initialState, action);

    expect(returnState).toEqual(expectedState);
  });
});

test('RESET_RECIPE', () => {
  const expectedState = {
    recipe: {
      id: null,
      title: null,
      description: null,
      forked_from: null,
      prep_time: 0,
      cook_time: 0,
      img: null,
      owner: {},
      ingredients: [],
      instructions: [],
      tags: [],
      notes: [],
      total_saves: null,
      editable: false,
    },
    isLoading: false,
    isSubmitting: false,
    editMode: false,
    error: null,
  };

  const returnState = singleRecipeReducer(initState, {
    type: types.RESET_RECIPE,
  });

  expect(returnState).toEqual(expectedState);
});

test('START_EDIT_MODE', () => {
  const expecetedState = { ...initState, editMode: true };

  const returnState = singleRecipeReducer(initState, {
    type: types.START_EDIT_MODE,
  });

  expect(returnState).toEqual(expecetedState);
});

test('STOP_EDIT_MODE', () => {
  const initialState = { ...initState, editMode: true };
  const expectedState = { ...initialState, editMode: false };

  const returnState = singleRecipeReducer(initialState, {
    type: types.STOP_EDIT_MODE,
  });

  expect(returnState).toEqual(expectedState);
});
