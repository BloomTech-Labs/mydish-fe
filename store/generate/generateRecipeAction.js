import axios from 'axios';
import FormData from 'form-data';
import newImage from '../../images/image.jpg';

export const START_GENERATE_INGREDIENTS = 'START_GENERATE_INGREDIENTS';
export const GENERATE_INGREDIENTS_SUCCESS = 'GENERATE_INGREDIENTS_SUCCESS';
export const GENERATE_INGREDIENTS_FAILURE = 'GENERATE_INGREDIENTS_FAILURE';
export const generateIngredients = (image) => async (dispatch) => {
  dispatch({ type: START_GENERATE_INGREDIENTS });

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({ word: image });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'http://dishify2005-env.eba-tnzz2p6v.us-east-1.elasticbeanstalk.com/recipe_parser/ingredients\n',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

export const START_GENERATE_INSTRUCTIONS = 'START_GENERATE_INSTRUCTIONS';
export const GENERATE_INSTRUCTIONS_SUCCESS = 'GENERATE_INSTRUCTIONS_SUCCESS';
export const GENERATE_INSTRUCTIONS_FAILURE = 'GENERATE_INSTRUCTIONS_FAILURE';
export const generateInstructions = (image) => async (dispatch) => {
  dispatch({ type: START_GENERATE_INSTRUCTIONS });

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({ word: image });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'http://dishify2005-env.eba-tnzz2p6v.us-east-1.elasticbeanstalk.com/recipe_parser/instructions',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));

  // axios
  //   .post(
  //     'http://dishify1505-env.eba-b5yyyntm.us-east-1.elasticbeanstalk.com/recipe_parser/instructions',
  //     form
  //   )
  //   .then((res) => {
  //     console.log(res.data);
  //     dispatch({ type: GENERATE_INSTRUCTIONS_SUCCESS, payload: res.data });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     dispatch({ type: GENERATE_INSTRUCTIONS_FAILURE, payload: err });
  //   });
};

export const START_GENERATE_GETTER = 'START_GENERATE_GETTER';
export const GENERATE_GETTER_SUCCESS = 'GENERATE_GETTER_SUCCESS';
export const GENERATE_GETTER_FAILURE = 'GENERATE_GETTER_FAILURE';
export const predictIngredientsFromTitle = (food) => (dispatch) => {
  dispatch({ type: START_GENERATE_GETTER });

  const foodToSubmit = {
    word: food,
  };

  axios
    .post(
      'http://dishify1505-env.eba-b5yyyntm.us-east-1.elasticbeanstalk.com/ingredients/getter',
      foodToSubmit
    )
    .then((res) => {
      const formattedResponse = JSON.parse(res.data).map((ing) => {
        return {
          units: ing.unit ? ing.unit : 'whole',
          quantity: ing.quantity,
          name: ing.ingredient,
        };
      });
      dispatch({ type: GENERATE_GETTER_SUCCESS, payload: formattedResponse });
    })
    .catch((err) => {
      console.log(res.data);
      dispatch({ type: GENERATE_GETTER_FAILURE, payload: err });
    });
};

export const START_FETCH_TITLE_FROM_IMAGE = 'START_FETCH_TITLE_FROM_IMAGE';
export const FETCH_TITLE_FROM_IMAGE_FAILURE = 'FETCH_TITLE_FROM_IMAGE_SUCCESS';
export const fetchTitleFromImage = (image) => (dispatch) => {
  dispatch({ type: START_FETCH_TITLE_FROM_IMAGE });

  axios
    .post('placeholder URL', image)
    .then((res) => {
      const foodToSubmit = res.data;
      axios
        .post(
          'http://dishify1505-env.eba-b5yyyntm.us-east-1.elasticbeanstalk.com/ingredients/getter',
          foodToSubmit
        )
        .then((res) => {
          const formattedResponse = JSON.parse(res.data).map((ing) => {
            return {
              units: ing.unit ? ing.unit : 'whole',
              quantity: ing.quantity,
              name: ing.ingredient,
            };
          });
          dispatch({
            type: GENERATE_GETTER_SUCCESS,
            payload: formattedResponse,
          });
        })
        .catch((err) => {
          console.log(res.data);
          dispatch({ type: GENERATE_GETTER_FAILURE, payload: err });
        });
    })
    .catch((err) => {
      dispatch({ type: FETCH_TITLE_FROM_IMAGE_FAILURE, payload: err });
    });
};
