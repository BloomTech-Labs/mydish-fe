export const cleanUpIngredients = (ingredients) => {
  return ingredients
    .filter(
      (ing) =>
        ing.name &&
        ing.name.replace(/\s|\n+/g, '').length && //Check that ing.name has length after spaces and newlines are removed
        ing.quantity &&
        ing.units
    )
    .map((ing) => ({ ...ing, name: ing.name.replace(/\n+/g, ' ') }));
};
