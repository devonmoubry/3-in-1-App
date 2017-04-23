import React from 'react'
import { connect } from 'react-redux'
import container from '../../containers/all.js'

class Clue extends React.Component {
    constructor(props) {
        super(props);

        this.clueClick = this.clueClick.bind(this);
        this.isClueViewed = this.isClueViewed.bind(this);
    }

    clueClick (e) {
      e.preventDefault();
      this.props.dispatch({ type: "SET_CURRENT_CLUE", clue: this.props.clue });
      this.props.dispatch({ type: "SHOW_MODAL" });
    }

    isClueViewed(clue) {
      let clueViewed = false;
      this.props.viewedClues.forEach(function(viewedClue) {
        if (viewedClue == clue) {
          clueViewed = true;
        }
      });
      return clueViewed;
    }

    render() {
        if (this.isClueViewed(this.props.clue) == true) {
          console.log('rendering viewed');
          return(
              <li className="jeopardy-values">
              <p className="jeopardy-value-viewed">VIEWED</p>
              </li>
          )
        } else {
          console.log('rendering value');
          return (
            <li className="jeopardy-values">
            <a className="jeopardy-value" href="#" onClick={this.clueClick}>${this.props.clue.value}</a>
            </li>
          )
        }
    }
}
export default connect(container.allState)(Clue)
