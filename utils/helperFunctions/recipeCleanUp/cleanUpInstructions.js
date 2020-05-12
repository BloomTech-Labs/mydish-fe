export const cleanUpInstructions = (instructions, mode) => {
  return instructions
    .filter((instruction) => {
      const step = mode === 'create' ? instruction : instruction.description;
      return step && step.replace(/\s|\n+/g, '').length; //Check that step has length after spaces and newlines are removed
    })
    .map((instruction, i) => {
      const step = mode === 'create' ? instruction : instruction.description;
      const description = step.replace(/\n+/g, ' '); // Remove any newlines
      return mode === 'create'
        ? {
            step_number: i + 1, // Add the step number
            description,
          }
        : { ...instruction, description };
    });
};
