import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import container from '../../containers/all.js'
import Startpage from './start_page.js'

class JeopardyComponents extends React.Component {

    constructor (props) {
      super(props);
    }

    render () {
        let CurrentView = this.props.view;
        return (
            <main className="jeopardy-container">
                <CurrentView />
            </main>
        );
    }
}

export default connect(container.allState)(JeopardyComponents)
