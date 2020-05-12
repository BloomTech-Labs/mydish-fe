import { store } from '../../store/index';
import { courses } from '../../constants/courses';
export function validateFields(recipe, mode) {
  const state = store.getState();
  recipe = recipe || state.singleRecipe.recipe;
  const errs = [];
  const recipeTags =
    mode === 'create' ? recipe.tags : recipe.tags.map((tag) => tag.name);
  if (!recipe.title) {
    errs.push('title');
  }

  if (!recipe.prep_time && !recipe.cook_time) {
    errs.push('prep_time and/or cook_time');
  }

  if (!recipe.ingredients.length) {
    errs.push('ingredients');
  }

  if (!recipe.instructions.length) {
    errs.push('instructions');
  }

  let courseTypeCount = 0;

  courses.forEach((type) => {
    recipeTags.includes(type) && courseTypeCount++; //if the courseType has been selected by the user increment a count variable.
  });

  if (!courseTypeCount) {
    // if no course types have been chosen by the user, render the error message
    errs.push('tags');
  }

  return errs;
}
