export default function getQuestionsAPI () {
  return (data) => {
    return $.ajax({
      type: 'GET',
      url: 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple',
      dataType: "JSON"
    });
  }
}
