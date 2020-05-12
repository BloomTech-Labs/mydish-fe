const emptyIngredient = {
  name: '',
  quantity: '',
  units: '',
};
export const initialCreateFormState = {
  img: '',
  title: '',
  prep_time: '',
  cook_time: '',
  tags: [],
  ingredients: new Array(3).fill(emptyIngredient),
  instructions: new Array(3).fill(''),
  notes: [''],
};
