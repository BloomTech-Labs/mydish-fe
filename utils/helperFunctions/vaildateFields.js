
export function validateFields(recipe,courses, edit, oldRecipe) {
    console.log('edit in validateFields', edit);

    const errs = [];

        if (recipe.title === oldRecipe.title) {
          errs.push('Forked recipe must not have the same title as the master recipe');
        }

        if (!recipe.title) {
              errs.push('recipe must have a title');
          }

        if (!recipe.prep_time && !recipe.cook_time) {
          errs.push('recipe must have cook time specified');
        }

        if(!recipe.ingredients.length) {
          errs.push('recipe must have at least 1 ingredient');
        }

        if(!recipe.instructions.length) {
          errs.push('recipe must have at least 1 step');
        }

        let courseTypeCount = 0;

        courses.forEach( type => {
          recipe.tags.includes(type) && courseTypeCount++  //if the courseType has been selected by the user increment a count variable.
        })


        if (!courseTypeCount && !edit) {  // if no course types have been chosen by the user, render the error message
          errs.push('recipe must have a Course Type selected ');
        }

        return errs;
    }