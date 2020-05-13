import {
  START_FETCH_RECIPE,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
  START_UPDATE_RECIPE,
  UPDATE_RECIPE_FAILURE,
  UPDATE_RECIPE_SUCCESS,
  RESET_RECIPE,
  EDIT_IMAGE,
  EDIT_TITLE,
  EDIT_PREPTIME,
  EDIT_COOKTIME,
  EDIT_INGRED,
  EDIT_INSTRUCT,
  EDIT_NOTES,
  ADD_INGREDIENT,
  ADD_INSTRUCTION,
  ADD_NOTE,
  DELETE_INGREDIENT,
  DELETE_NOTE,
  DELETE_INSTRUCT,
  START_EDIT_MODE,
  STOP_EDIT_MODE,
  START_SUBMIT_EDITED_RECIPE,
  SUBMIT_EDITED_RECIPE_SUCCESS,
  SUBMIT_EDITED_RECIPE_FAILURE,
  FETCH_VERSION_BY_REVISION_NUM_START,
  FETCH_VERSION_BY_REVISION_NUM_SUCCESS,
  FETCH_VERSION_BY_REVISION_NUM_FAILURE,
  RESET_ALERTS,
  TOGGLE_TAG,
  CLEANUP_RECIPE,
} from './singleRecipeActions';
import { cleanUpIngredients } from '../../utils/helperFunctions/recipeCleanUp/cleanUpIngredients';
import { cleanUpInstructions } from '../../utils/helperFunctions/recipeCleanUp/cleanUpInstructions';
import { cleanUpNotes } from '../../utils/helperFunctions/recipeCleanUp/cleanUpNotes';
import { cleanUpTags } from '../../utils/helperFunctions/recipeCleanUp/cleanUpTags';

const initState = {
  recipe: {
    id: null,
    title: null,
    description: null,
    forked_from: null,
    prep_time: 0,
    cook_time: 0,
    img: null,
    owner: {
      user_id: null,
      username: null,
    },
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

export const singleRecipeReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case START_EDIT_MODE:
      return { ...state, editMode: true };
    case STOP_EDIT_MODE:
      return { ...state, editMode: false };

    case START_UPDATE_RECIPE:
      return {
        ...state,
        error: null,
      };
    case START_FETCH_RECIPE:
      return {
        ...state,
        error: null,
        isLoading: true,
        editMode: false,
      };
    case UPDATE_RECIPE_SUCCESS: // UPDATE and FETCH are the same
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipe: action.payload,
      };
    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_RECIPE_FAILURE:
      return {
        ...state,
        recipe: action.recipe || state.recipe,
        isLoading: false,
        error: action.payload,
      };
    case EDIT_INGRED: {
      const ingredients = state.recipe.ingredients.map((val, i) => {
        if (i === action.index) {
          return action.payload;
        } else return val;
      });
      return { ...state, recipe: { ...state.recipe, ingredients } };
    }
    case EDIT_INSTRUCT: {
      const instructions = state.recipe.instructions.map((val, i) => {
        if (i === action.index) {
          return action.payload;
        } else return val;
      });
      return { ...state, recipe: { ...state.recipe, instructions } };
    }

    case EDIT_IMAGE:
      return {
        ...state,
        recipe: { ...state.recipe, img: action.payload },
      };

    case EDIT_TITLE:
      return {
        ...state,
        recipe: { ...state.recipe, title: action.payload },
      };

    case EDIT_PREPTIME:
      return {
        ...state,
        recipe: { ...state.recipe, prep_time: action.payload },
      };

    case EDIT_COOKTIME:
      return {
        ...state,
        recipe: { ...state.recipe, cook_time: action.payload },
      };

    case EDIT_NOTES: {
      const newNotes = state.recipe.notes.map((val, i) => {
        if (i === action.index) return action.payload;
        else return val;
      });
      return {
        ...state,
        recipe: { ...state.recipe, notes: newNotes },
      };
    }
    case ADD_INGREDIENT:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          ingredients: [...state.recipe.ingredients, action.payload],
        },
      };

    case ADD_INSTRUCTION:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          instructions: [...state.recipe.instructions, action.payload],
        },
      };

    case ADD_NOTE:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          notes: [...state.recipe.notes, action.payload],
        },
      };

    case DELETE_INGREDIENT:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          ingredients: state.recipe.ingredients.filter(
            (val, i) => i !== action.payload
          ),
        },
      };

    case DELETE_NOTE:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          notes: state.recipe.notes.filter((note, i) => i !== action.index),
        },
      };

    case DELETE_INSTRUCT:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          instructions: state.recipe.instructions
            .filter((val, i) => i !== action.payload)
            .map((step, i) => ({ ...step, step_number: i + 1 })),
        },
      };
    case CLEANUP_RECIPE:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          ingredients: cleanUpIngredients(state.recipe.ingredients),
          instructions: cleanUpInstructions(state.recipe.instructions, 'edit'),
          notes: cleanUpNotes(state.recipe.notes, 'edit'),
        },
      };

    case START_SUBMIT_EDITED_RECIPE:
      return {
        ...state,
        recipe: {
          ...state.recipe,
          tags: cleanUpTags(state.recipe.tags),
          /* We have to clean up the tags here so that we are sending the back-end an 
                    array of strings, as opposed to an array of objects. We can't call cleanUpTags()
                    with the other cleanUp functions above, because it would cause the filters in
                    TOGGLE_TAG to deselect all tags and not allow the user to Save.*/
        },
        isSubmitting: true,
        isLoading: true,
        error: null,
      };

    case SUBMIT_EDITED_RECIPE_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        isLoading: false,
        successAlert: true,
        error: null,
        recipe: action.payload,
      };

    case SUBMIT_EDITED_RECIPE_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        isLoading: false,
        error: action.payload,
      };

    case RESET_RECIPE:
      return action.payload ? { ...state, recipe: action.payload } : initState;

    case FETCH_VERSION_BY_REVISION_NUM_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_VERSION_BY_REVISION_NUM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipe: action.payload,
      };
    case FETCH_VERSION_BY_REVISION_NUM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case RESET_ALERTS:
      return {
        ...state,
        successAlert: false,
      };

    case TOGGLE_TAG: {
      let tagExists = false;
      let filteredTags = [];

      state.recipe.tags.forEach((tag) => {
        if (tag.name === action.payload) {
          tagExists = true;
        }
      });

      if (tagExists) {
        filteredTags = state.recipe.tags.filter((tag) => {
          return tag.name !== action.payload;
        });
      } else {
        filteredTags = [...state.recipe.tags, { name: action.payload }];
      }

      return {
        ...state,
        recipe: {
          ...state.recipe,
          tags: filteredTags,
        },
      };
    }

    default:
      return state;
  }
};
