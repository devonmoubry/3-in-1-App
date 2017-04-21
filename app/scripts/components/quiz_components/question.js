import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import questions from './questions.js'
import container from '../../containers/all.js'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestion = this.handleQuestion.bind(this);
  }

  handleQuestion () {
    const questionId = parseInt(this.props.match.params.id);
    const answer = this.refs.answer.value;
    this.props.dispatch({ type: 'SAVE_ANSWER', question_id: questionId, answer: answer });
  }

  render (data) {
    const questionId = parseInt(this.props.match.params.id);
    const question = questions[questionId - 1];
    let leftButton = <Link className="left" to={`/question/${question.id - 1}`}>Previous Question</Link>;
    let rightButton = <Link className="right" onClick={this.handleQuestion} to={`/question/${question.id + 1}`}>Next Question</Link>;

    if (questionId === 10) {
      rightButton = <Link className="right" onClick={this.handleQuestion} to="/results">Results</Link>
    }

    if (questionId === 1) {
      leftButton = null;
    }

    return (
      <main className="question-main">
          <h1 className="quiz-question">Question {question.id}</h1>
          <p>
          {question.question}
          </p>
          {leftButton}
          <input ref="answer" type="text" />
          {rightButton}
      </main>
    );
  }
}

export default connect(container.allState)(Question)
