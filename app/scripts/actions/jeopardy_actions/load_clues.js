// import getClues from './get_clues.js'

export default function loadClues (category_with_clues) {
  return (dispatch) => {
    console.log('Loading category with clues', category_with_clues);

    dispatch({ type: 'CLUES_LOADED', category_with_clues: category_with_clues });
    // dispatch(getClues(categories));
    // dispatch({ type: 'SHOW_BOARD' });

    // 1. put the categories in the state
    // 2. change the view to game board
  }
}
