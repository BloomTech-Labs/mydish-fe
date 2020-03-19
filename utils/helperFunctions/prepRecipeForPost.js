import postImage from "../../components/RecipeImageComponents/postImage";
import { serverErrorAlert } from "./serverErrorAlert";

export const prepRecipeForPost = async recipe => {
    return {
        ...recipe,
        // Remove any ingredients that are empty
        ingredients: recipe.ingredients
            .filter(ing => ing.name.length && ing.quantity && ing.units)
            .map(ing => ({ ...ing, name: ing.name.replace(/\n+/g, " ") })), //Remove any newlines
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
