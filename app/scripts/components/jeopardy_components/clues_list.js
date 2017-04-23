import React from 'react'
import { connect } from 'react-redux'
import container from '../../containers/all.js'
import Clue from './clue.js'

class CluesList extends React.Component {
  constructor(props) {
    super(props);

    this.cluesListItems = this.cluesListItems.bind(this);
  }


  cluesListItems(clues) {
    return clues.map(function(clue) {
      return (
        <Clue key={clue.id} clue={clue}/>
      )
    })
  }

  render() {
    let category = this.props.category;
    if (category.clues !== undefined && category.clues.length > 0) {
      return(
        <section className="clues-list-section">
          <ul className="clues-list">
            { this.cluesListItems(category.clues) }
          </ul>
        </section>
      );
    } else {
      return(
        <p>Loading clues...</p>
      );
    }
  }
}

export default connect(container.allState)(CluesList)
