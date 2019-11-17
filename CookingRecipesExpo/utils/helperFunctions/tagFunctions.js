
export function toggleBackgroundColor(category){
    const index= color.active.indexOf(category)
    const newActive= index !== -1 ?  color.active.filter(activeCategory => activeCategory !== category) : color.active.concat(category)
    setColor({active: newActive})
  }

export function tagsIncluded(tag) {
      //const check = recipe.categories.includes(tag) 
       const index= recipe.categories.indexOf(tag)
       const newTags= index !== -1 ?  recipe.categories.filter(activeTag => activeTag !== tag) : recipe.categories.concat(tag)
       setRecipe({...recipe, categories: newTags})
      }
      
export function toggleDifficultyColor(category){
let newCategory = color.active;
if(category === "Easy"){
  newCategory = color.active.filter(activeCat => activeCat !== 'Intermediate').filter(activeCat => activeCat !== 'Difficult').concat(category)
 }
 else if(category === "Intermediate"){
  newCategory = color.active.filter(activeCat => activeCat !== 'Easy').filter(activeCat => activeCat !== 'Difficult').concat(category)
 }
 else if(category === "Difficult"){
  newCategory = color.active.filter(activeCat => activeCat !== 'Easy').filter(activeCat=> activeCat !== 'Intermediate').concat(category)
 }
  setColor({active: newCategory})
}

export const difficultyTags = (tag) => {
  let newTags = recipe.categories;
  if(tag === "Easy"){
    newTags = recipe.categories.filter(activeTag => activeTag !== 'Intermediate').filter(activeTag => activeTag !== 'Difficult').concat(tag)
   }
   else if(tag === "Intermediate"){
    newTags = recipe.categories.filter(activeTag => activeTag !== 'Easy').filter(activeTag => activeTag !== 'Difficult').concat(tag)
   }
   else if(tag === "Difficult"){
    newTags = recipe.categories.filter(activeTag => activeTag !== 'Easy').filter(activeTag => activeTag !== 'Intermediate').concat(tag)
   }
        setRecipe({...recipe, categories: newTags})
}

