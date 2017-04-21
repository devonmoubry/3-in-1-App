import React from 'react'
import { Link } from 'react-router-dom'

class Start extends React.Component {
  render () {
    return (
      <main className="main">
          <h1>Welcome!</h1>
          <p>Please answer these 10 questions.</p>
          <p>You can view the Results page to check on your progress.</p>
          <p>Click submit on the Results page when you are finished.</p>
          <Link to="/question/1">Let’s Begin!</Link>
      </main>
    );
  }
}

export default Start
