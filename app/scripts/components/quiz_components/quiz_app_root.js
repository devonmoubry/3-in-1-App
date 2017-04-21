import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../../containers/all.js'
import questions from './questions.js'

const NavBar = () => {

  const questionsLinks = questions.map(function(question) {
    return (<NavLink key={question.id} to={`/question/${question.id}`}  >Question {question.id}</NavLink>);
  })

  return (
    <nav>
      <NavLink to="/start">Start</NavLink>
      <br />
      { questionsLinks }
      <NavLink to="/results">Results</NavLink>
    </nav>
  )
}

class QuizComponents extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main className="quiz-main">
        <NavBar/>
        <section>
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(QuizComponents)
