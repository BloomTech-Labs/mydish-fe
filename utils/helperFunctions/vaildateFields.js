export function validateFields(recipe, courses) {
    const errs = [];

    if (!recipe.title) {
        errs.push("title");
    }

    if (!recipe.prep_time && !recipe.cook_time) {
        errs.push("prep_time and/or cook_time");
    }

    if (!recipe.ingredients.length) {
        errs.push("ingredients");
    }

    if (!recipe.instructions.length) {
        errs.push("instructions");
    }

    if (!recipe.notes.length) {
        errs.push("notes");
    }

    let courseTypeCount = 0;

    courses.forEach(type => {
        recipe.tags.includes(type) && courseTypeCount++; //if the courseType has been selected by the user increment a count variable.
    });

    if (!courseTypeCount) {
        // if no course types have been chosen by the user, render the error message
        errs.push("tags");
    }

    return errs;
}
