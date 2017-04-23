import getClues from './get_clues.js'

export default function loadBoard (categories) {
  return (dispatch) => {
    console.log('loading board');

    dispatch({ type: 'CATEGORIES_LOADED', categories: categories });
    dispatch(getClues(categories));
    // dispatch({ type: 'SHOW_BOARD' });

    // 1. put the categories in the state
    // 2. change the view to game board
  }
}
