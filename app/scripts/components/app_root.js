//libraries
import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";

//files
import container from '../containers/all.js'

//components
import MarkdownComponents from './editor_components/markdown_components.js'


class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <main>
          <section />
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot);
