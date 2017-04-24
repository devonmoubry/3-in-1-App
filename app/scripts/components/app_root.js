//libraries
import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

//files
import container from './../containers/all.js'



class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <main className="welcome-container">
          <h1>WELCOME!</h1>
          <h2>Here is a 3-in-1 App including: a Jeopardy Clone, a Movie Trivia Quiz, and a Markdown Preview Notetaker.</h2>
          <h1>Enjoy!</h1>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
