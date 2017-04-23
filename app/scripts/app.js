import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
//components
import AppRoot from "./components/app_root.js";
// markdown components
import EditorComponents from "./components/editor_components/markdown_components.js";
import MarkdownComponents from './components/editor_components/markdown_components.js'
// quiz components
import Start from './components/quiz_components/start.js'
import Results from './components/quiz_components/results.js'
import Question from './components/quiz_components/question.js'
import QuizComponents from './components/quiz_components/quiz_app_root.js'
// jeopardy components
import JeopardyComponents from './components/jeopardy_components/jeopardy_app_root.js'

const NavBar = () => {
  return (
    <nav className="navigation-container">
      <NavLink to="/">Hello</NavLink>
      <br />
      <NavLink to="/game">Jeopardy Clone</NavLink>
      <br />
      <NavLink to="/quiz">Movie Trivia Quiz</NavLink>
      <br />
      <NavLink to="/editor">Markdown Notes Preview</NavLink>
    </nav>
  )
}

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div className="main-div">
          <NavBar />
          <Route exact path="/" component={AppRoot} />
          <Route exact path="/game" component={JeopardyComponents} />
          <Route path="/quiz" component={QuizComponents} />
          <Route exact path="/editor" component={EditorComponents} />

{/* quiz routes*/}
          <div className="quiz-div">
              <Route path="/quiz/start"    component={Start} />
              <Route path="/quiz/question/:id" component={Question} />
              <Route path="/quiz/results"  component={Results} />
          </div>
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
