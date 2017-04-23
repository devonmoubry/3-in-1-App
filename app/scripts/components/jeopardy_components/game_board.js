import React from 'react'
import { connect } from 'react-redux'
import container from '../../containers/all.js'
import CluesList from './clues_list.js'
import ClueModal from './clue_modal.js'

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let categories = this.props.categories;

    let clueModal = '';
    if (this.props.showModal == true) {
      clueModal = <ClueModal clue={this.props.currentClue} />
    }

    return(
      <section className="jeopardy-play-view">
          <section className="game-board">
            <ul className="category">
              {
                categories.map(function(category) {
                  return (
                    <li className="category-list" key={category.id}>
                      <h2 className="jeopardy-h2">{category.title}</h2>
                      <CluesList category={category} />
                    </li>
                  );
                })
              }
            </ul>

            { clueModal }
          </section>
          <section className="scoreboard">
            <h1 className="correct-answer-title">Correct Answer</h1>
            <div className="correct-answer">{this.props.correctAnswer}</div>
            <h1 className="scoreboard-title">Contestant Score</h1>
            <div className="jeopardy-score">${this.props.contestantScore}</div>
          </section>
      </section>
    );
  }
}

export default connect(container.allState)(GameBoard)
