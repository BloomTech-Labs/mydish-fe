import { postImage } from "./postImage";
import { serverErrorAlert } from "./serverErrorAlert";
import { cleanUpIngredients } from "./recipeCleanup/cleanUpIngredients";
import { cleanUpInstructions } from "./recipeCleanup/cleanUpInstructions";

export const prepRecipeForPost = async recipe => {
    return {
        ...recipe,
        ingredients: cleanUpIngredients(recipe.ingredients), // Removes empty ingredients, removes any newlines.
        instructions: cleanUpInstructions(recipe.instructions, "create"), // Same thing as cleanUpIngredients, but for Instructions.
        notes: recipe.notes
            .filter(note => note.length) // Remove empty notes
            .map(
                (note, i) => note.replace(/\n+/g, " "), // Remove any newlines
            ),
        author_comment: "Original Recipe",
        img: recipe.img ? await postImage(recipe.img, serverErrorAlert) : "",
    };
};
