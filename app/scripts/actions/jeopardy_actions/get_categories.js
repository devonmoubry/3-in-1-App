import loadBoard from './load_board.js';

export default function getCategories () {
  return (dispatch) => {
    return $.ajax({
      type: 'GET',
      url: 'http://jservice.io/api/categories.json?count=6',
      dataType: "JSON"
    }).then((data) => dispatch(loadBoard(data)));
  }
}
