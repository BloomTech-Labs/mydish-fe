export const cleanUpNotes = (notes, mode) => {
  return notes
    .filter((note) => {
      const noteBody = mode === 'create' ? note : note.description;
      return noteBody && noteBody.replace(/\s|\n+/g, '').length; //Check that noteBody has length after spaces and newlines are removed
    })
    .map((note) => {
      let noteBody = mode === 'create' ? note : note.description;
      noteBody = noteBody.replace(/\n+/g, ' '); // Remove any newlines
      return mode === 'create' ? noteBody : { ...note, description: noteBody };
    });
};
