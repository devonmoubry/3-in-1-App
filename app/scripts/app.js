import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
//components
import AppRoot from "./components/app_root.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import EditorComponents from "./components/editor_components/markdown_components.js";
import MarkdownComponents from './components/editor_components/markdown_components.js'

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
        <div>
          <NavBar />
          <Route exact path="/" component={AppRoot} />
          {/*<Route exact path="/game" component={JeopardyComponents} />
          <Route exact path="/quiz" component={QuizComponents} />*/}
          <Route exact path="/editor" component={EditorComponents} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
