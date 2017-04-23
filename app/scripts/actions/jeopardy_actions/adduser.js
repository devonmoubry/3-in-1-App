import getCategories from './get_categories.js';

export default function addUser (username) {
  return (dispatch) => {
    dispatch({ type: "ADD_USER", username: username });
    dispatch( getCategories() );
  }
}
