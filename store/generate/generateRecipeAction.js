import axios from 'axios';

export const START_GENERATE_INGREDIENTS = 'START_GENERATE_INGREDIENTS';
export const GENERATE_INGREDIENTS_SUCCESS = 'GENERATE_INGREDIENTS_SUCCESS';
export const GENERATE_INGREDIENTS_FAILURE = 'GENERATE_INGREDIENTS_FAILURE';
export const generateIngredients = (photo) => (dispatch) => {
  dispatch({ type: START_GENERATE_INGREDIENTS });

  const photoPackage = {
    img: photo,
  };

  axios
    .post(
      'http://dishify2-env.eba-jpgptbu3.us-east-1.elasticbeanstalk.com/recipe_parser/ingredients/',
      photo
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GENERATE_INGREDIENTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GENERATE_INGREDIENTS_FAILURE, payload: err });
    });
};
export const START_GENERATE_INSTRUCTIONS = 'START_GENERATE_INSTRUCTIONS';
export const GENERATE_INSTRUCTIONS_SUCCESS = 'GENERATE_INSTRUCTIONS_SUCCESS';
export const GENERATE_INSTRUCTIONS_FAILURE = 'GENERATE_INSTRUCTIONS_FAILURE';
export const generateInstructions = (photo) => (dispatch) => {
  dispatch({ type: START_GENERATE_INSTRUCTIONS });

  axios
    .post(
      'http://dishify2-env.eba-jpgptbu3.us-east-1.elasticbeanstalk.com/recipe_parser/instructions/',
      photo
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GENERATE_INSTRUCTIONS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GENERATE_INSTRUCTIONS_FAILURE, payload: err });
    });
};

export const START_GENERATE_GETTER = 'START_GENERATE_GETTER';
export const GENERATE_GETTER_SUCCESS = 'GENERATE_GETTER_SUCCESS';
export const GENERATE_GETTER_FAILURE = 'GENERATE_GETTER_FAILURE';
export const predictIngredientsFromTitle = (food) => (dispatch) => {
  dispatch({ type: START_GENERATE_GETTER });

  const newObject = {
    word: food,
  };

  axios
    .post(
      'http://dishify2-env.eba-jpgptbu3.us-east-1.elasticbeanstalk.com/ingredients/getter',
      newObject
    )
    .then((res) => {
      dispatch({ type: GENERATE_GETTER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GENERATE_GETTER_FAILURE, payload: err });
    });
};
