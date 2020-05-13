import axios from 'axios';

export const START_GENERATE_INGREDIENTS = 'START_GENERATE_INGREDIENTS';
export const GENERATE_INGREDIENTS_SUCCESS = 'GENERATE_INGREDIENTS_SUCCESS';
export const GENERATE_INGREDIENTS_FAILURE = 'GENERATE_INGREDIENTS_FAILURE';
export const generateIngredients = (photo) => (dispatch) => {
  dispatch({ type: START_GENERATE_INGREDIENTS });

  axios
    .post('endpointURL!!!', ingredients)
    .then((res) => {
      dispatch({ type: GENERATE_INGREDIENTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GENERATE_INGREDIENTS_FAILURE, payload: err });
    });
};
export const START_GENERATE_INSTRUCTIONS = 'START_GENERATE_INSTRUCTIONS';
export const GENERATE_INSTRUCTIONS_SUCCESS = 'GENERATE_INSTRUCTIONS_SUCCESS';
export const GENERATE_INSTRUCTIONS_FAILURE = 'GENERATE_INSTRUCTIONS_FAILURE';
export const generateInstructions = (photo) => (dispatch) => {
  dispatch({ type: START_GENERATE_INSTRUCTIONS });

  axios
    .post('endpointURL!!!', ingredients)
    .then((res) => {
      dispatch({ type: GENERATE_INSTRUCTIONS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GENERATE_INSTRUCTIONS_FAILURE, payload: err });
    });
};
