import axios from 'axios';

export const START_FETCH_INGREDIENTS = 'START_FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILURE = 'FETCH_INGREDIENTS_FAILURE';
export const fetchIngredients = (ingredients) => (dispatch) => {
  dispatch({ type: START_FETCH_INGREDIENTS });

  axios
    .post(
      'http://mydish-ingredientprediction.eba-wmm2grnv.us-east-2.elasticbeanstalk.com/pred',
      ingredients
    )
    .then((res) => {
      dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_INGREDIENTS_FAILURE, payload: err });
    });
};

export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const deleteIngredient = (name) => ({
  type: DELETE_INGREDIENT,
  payload: name,
});
