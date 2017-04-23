import getClue from './get_clue.js'

export default function getClues (categories) {
  return (dispatch) => {
    console.log('categories', categories);

    // iterate through category and dispatch getClue for each one
    categories.forEach(function(category) {
      dispatch(getClue(category));
      console.log('category', category);
    })
    console.log('getClues');
  }

}
