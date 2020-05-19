import axios from 'axios';
import FormData from 'form-data';

export const START_GENERATE_INGREDIENTS = 'START_GENERATE_INGREDIENTS';
export const GENERATE_INGREDIENTS_SUCCESS = 'GENERATE_INGREDIENTS_SUCCESS';
export const GENERATE_INGREDIENTS_FAILURE = 'GENERATE_INGREDIENTS_FAILURE';
export const generateIngredients = (image) => async (dispatch) => {
  dispatch({ type: START_GENERATE_INGREDIENTS });

  const form = new FormData();
  const imageData = {
    uri: image,
    type: 'image/jpeg',
    name: image.split('/').pop(),
  };
  form.append('image', imageData);

  try {
    res = await axios({
      method: 'post',
      url:
        'http://dishify1505-env.eba-b5yyyntm.us-east-1.elasticbeanstalk.com/recipe_parser/ingredients',
      data: form,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res.data);
    dispatch({ type: GENERATE_INGREDIENTS_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GENERATE_INGREDIENTS_FAILURE, payload: err });
  }
  // axios
  //   .post(
  //     'http://dishify1505-env.eba-b5yyyntm.us-east-1.elasticbeanstalk.com/recipe_parser/ingredients',

  //   )
  //   .then((res) => {
  //     console.log(res.data);
  //     dispatch({ type: GENERATE_INGREDIENTS_SUCCESS, payload: res.data });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     dispatch({ type: GENERATE_INGREDIENTS_FAILURE, payload: err });
  //   });
};
export const START_GENERATE_INSTRUCTIONS = 'START_GENERATE_INSTRUCTIONS';
export const GENERATE_INSTRUCTIONS_SUCCESS = 'GENERATE_INSTRUCTIONS_SUCCESS';
export const GENERATE_INSTRUCTIONS_FAILURE = 'GENERATE_INSTRUCTIONS_FAILURE';
export const generateInstructions = (image) => async (dispatch) => {
  dispatch({ type: START_GENERATE_INSTRUCTIONS });

  const form = new FormData();
  const imageData = {
    uri: image,
    type: 'image/jpeg',
    name: image.split('/').pop(),
  };
  form.append('image', imageData);

  try {
    const res = await axios({
      method: 'post',
      url:
        'http://dishify1505-env.eba-b5yyyntm.us-east-1.elasticbeanstalk.com/recipe_parser/instructions',
      data: form,
      headers: {
        'content-type': `multipart/form-data`,
      },
    });
    console.log(res);
    dispatch({ type: GENERATE_INGREDIENTS_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GENERATE_INGREDIENTS_FAILURE, payload: err });
  }

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
