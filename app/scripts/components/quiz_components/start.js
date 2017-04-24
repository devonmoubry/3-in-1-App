import React from 'react'
import { Link } from 'react-router-dom'

class Start extends React.Component {
  render () {
    return (
      <main className="quiz-container">
          <h1>Welcome!</h1>
          <p>Please answer these 10 questions. You can view the Results page to check on your progress. Click submit on the Results page when you are finished.</p>
          <Link to="/quiz/question/1">Let’s Begin!</Link>
      </main>
    );
  }
}

export default Start
