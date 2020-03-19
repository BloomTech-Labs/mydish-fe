import { postImage } from "./postImage";
import { serverErrorAlert } from "./serverErrorAlert";
import { cleanUpIngredients } from "./recipeCleanup/cleanupIngredients";

export const prepRecipeForPost = async recipe => {
    return {
        ...recipe,
        ingredients: cleanUpIngredients(recipe.ingredients), //Removes empty ingredients, removes any newlines
        instructions: recipe.instructions
            .filter(step => step.length) // Remove empty instructions
            .map((step, i) => ({
                step_number: i + 1, // Add the step number
                description: step.replace(/\n+/g, " "), // Remove any newlines
            })),
        notes: recipe.notes
            .filter(note => note.length) // Remove empty notes
            .map(
                (note, i) => note.replace(/\n+/g, " "), // Remove any newlines
            ),
        author_comment: "Original Recipe",
        img: recipe.img ? await postImage(recipe.img, serverErrorAlert) : "",
    };
};
