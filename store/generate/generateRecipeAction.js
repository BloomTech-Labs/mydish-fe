import axios from 'axios';

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
    'http://dishify2605-env.eba-vdmixjfd.us-east-1.elasticbeanstalk.com/recipe_parser/ingredients',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const formattedIngredients = JSON.parse(
        JSON.parse(result)
      ).ingredients.map((ing) => {
        return {
          units: ing.unit ? ing.unit : '',
          quantity: ing.quantity ? ing.quantity.replace(/[a-z A-Z]/g, '') : '',
          name: ing.ingredient,
        };
      });
      dispatch({
        type: GENERATE_INGREDIENTS_SUCCESS,
        payload: formattedIngredients,
      });
    })
    .catch((error) => {
      console.log('error', error);
      dispatch({ type: GENERATE_INGREDIENTS_FAILURE, payload: error });
    });
};

export const START_GENERATE_INSTRUCTIONS = 'START_GENERATE_INSTRUCTIONS';
export const GENERATE_INSTRUCTIONS_SUCCESS = 'GENERATE_INSTRUCTIONS_SUCCESS';
export const GENERATE_INSTRUCTIONS_FAILURE = 'GENERATE_INSTRUCTIONS_FAILURE';
export const generateInstructions = (image) => async (dispatch) => {
  dispatch({ type: START_GENERATE_INSTRUCTIONS });

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
    'http://dishify2605-env.eba-vdmixjfd.us-east-1.elasticbeanstalk.com/recipe_parser/instructions',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const formattedInstructions =
        typeof JSON.parse(JSON.parse(result)).instructions === 'string'
          ? [JSON.parse(JSON.parse(result)).instructions]
          : JSON.parse(JSON.parse(result)).instructions;
      dispatch({
        type: GENERATE_INSTRUCTIONS_SUCCESS,
        payload: formattedInstructions,
      });
    })
    .catch((error) => {
      console.log('error', error);
      dispatch({ type: GENERATE_INSTRUCTIONS_FAILURE, payload: error });
    });
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
      'http://dishify2605-env.eba-vdmixjfd.us-east-1.elasticbeanstalk.com/ingredients/getter',
      foodToSubmit
    )
    .then((res) => {
      const formattedResponse = JSON.parse(res.data).recommendations.map(
        (ing) => {
          return {
            units: ing.unit ? ing.unit : 'whole',
            quantity: ing.quantity,
            name: ing.ingredient,
          };
        }
      );
      dispatch({ type: GENERATE_GETTER_SUCCESS, payload: formattedResponse });
    })
    .catch((err) => {
      console.log('error', err);
      dispatch({ type: GENERATE_GETTER_FAILURE, payload: err });
    });
};

export const START_GENERATE_RECIPE = 'START_GENERATE_RECIPE';
export const GENERATE_RECIPE_SUCCESS = 'GENERATE_RECIPE_SUCCESS';
export const GENERATE_RECIPE_FAILURE = 'GENERATE_RECIPE_FAILURE';
export const generateRecipeFromUrl = (url) => (dispatch) => {
  dispatch({ type: START_GENERATE_RECIPE });

  const sendObj = JSON.stringify({ word: url });

  axios
    .post(
      'http://dishify2605-env.eba-vdmixjfd.us-east-1.elasticbeanstalk.com/recipe/getter',
      sendObj
    )
    .then((res) => {
      const formattedResponse = {
        title: JSON.parse(res.data).recipe.filter((obj) => obj.title)[0].title,
        ingredients: JSON.parse(res.data)
          .recipe.filter((obj) => obj.ingredients)[0]
          .ingredients.map((ing) => {
            return {
              units: ing.unit ? ing.unit : 'whole',
              quantity: ing.quantity ? ing.quantity : '1',
              name: ing.ingredient ? ing.ingredient : '',
            };
          }),
        instructions:
          typeof JSON.parse(res.data).recipe.filter(
            (obj) => obj.instructions
          )[0].instructions === 'string'
            ? [
                JSON.parse(res.data).recipe.filter((obj) => obj.instructions)[0]
                  .instructions,
              ]
            : JSON.parse(res.data).recipe.filter((obj) => obj.instructions)[0]
                .instructions,
      };
      dispatch({ type: GENERATE_RECIPE_SUCCESS, payload: formattedResponse });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GENERATE_RECIPE_FAILURE, payload: err });
    });
};

export const CLEAR_RECIPE = 'CLEAR_RECIPE';
export const clearRecipe = () => (dispatch) => {
  dispatch({ type: CLEAR_RECIPE });
};
