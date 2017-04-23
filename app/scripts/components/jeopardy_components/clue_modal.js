import React from 'react'
import { connect } from 'react-redux'
import container from '../../containers/all.js'

class ClueModal extends React.Component {
  constructor(props) {
    super(props);

    this.submitAnswer = this.submitAnswer.bind(this);
    this.pass = this.pass.bind(this);
  }

  submitAnswer(event) {
    event.preventDefault;
    const contestantAnswer = this.refs.contestantAnswer.value;
    const correctAnswer = this.props.clue.answer;
    if (contestantAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
      console.log('mo money');
      this.props.dispatch({ type: "VIEWED_CLUE", clue: this.props.clue })
      this.props.dispatch({ type: "HANDLE_CORRECT_ANSWER", value: this.props.clue.value})
    } else {
      console.log('no mo money');
      this.props.dispatch({ type: "VIEWED_CLUE", clue: this.props.clue })
      this.props.dispatch({ type: "HANDLE_INCORRECT_ANSWER", value: this.props.clue.value})
    }
  }

  pass() {
    console.log('pass');
    this.props.dispatch({ type: "VIEWED_CLUE", clue: this.props.clue })
  }

  render() {
    return(
      <section className={'modal-container'}>
        <div className={'modal'}>
          <h2 className="jeopardy-modal-title">{this.props.clue.question}</h2>
          <input autoFocus className="jeopardy-input" ref='contestantAnswer' id='contestantAnswer' type='text' placeholder='answer' />
          <button className="jeopardy-input" type='submit' onClick={this.submitAnswer}>Submit Answer</button>
          <button className="jeopardy-input" onClick={this.pass}>Pass</button>
        </div>
      </section>
    );
  }
}

export default connect(container.allState)(ClueModal)
