import loadClues from './load_clues';

export default function getClues (category) {
  return (dispatch) => {
    let url = "http://jservice.io/api/category.json?id=" + category.id;
    console.log('Get clue with url', url);
    return $.ajax({
      type: 'GET',
      url: url,
      dataType: "JSON"
    }).then((data) => dispatch(loadClues(data)));
  }

}


// return (dispatch) => {
//   return $.ajax({
//     type: 'GET',
//     url: 'http://jservice.io/api/category.json?id=11509',
//     dataType: "JSON"
//   }).then((data) => dispatch(()));
// }
