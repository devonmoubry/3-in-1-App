import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import container from '../../containers/all.js'
import marked from 'marked'

class MarkdownComponents extends React.Component {
    constructor(props) {
        super(props)

        this.updatePreview = this.updatePreview.bind(this);
        this.submitMarkdownNotes = this.submitMarkdownNotes.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
        this.dismissConfirmationMessage = this.dismissConfirmationMessage.bind(this);
        this.confirmationMessage = this.confirmationMessage.bind(this);
    }

    updatePreview() {
        const markdownInput = this.refs.markdown.value;
        this.props.dispatch({
            type: "UPDATE_PREVIEW",
            markdownPreview: markdownInput
        });
        console.log('I can see dead code');
    }

    submitMarkdownNotes() {
        const markdownInput = this.refs.markdown.value;
        console.log(markdownInput);
        this.props.dispatch({
            type: "SUBMIT_NOTES",
            markdownNotes: markdownInput
        });
        console.log('I submitted the Markdown Notes to backendless');
    }

    createMarkup() {
        return {
            __html: marked(this.props.markdownPreview)
        }
    }

    dismissConfirmationMessage() {
        this.props.dispatch({
            type: "DISMISS_CONFIRMATION"
        });
    }

    confirmationMessage() {
      if (this.props.showConfirmationMessage == true) {
        return <div className = "confirmation-message">You have submitted your markdown notes to the server
        <button onClick={this.dismissConfirmationMessage} className = "dismiss-button">Dismiss</button></div>
      } else {
        return '';
      }
    }

    render() {
        return (
            <main className="markdown-component">
                <section className = "markdown-container">
                    <h1 className = "markdown-title" >Moleskin</h1>
                    <textarea value = {this.props.markdownNotes} onChange = { this.updatePreview } className = "textarea" ref = "markdown" />
                    <div className = "submit-button-container">
                        <button className = "submit-button hvr-buzz" type = "submit" onClick = { this.submitMarkdownNotes }> Submit </button>
                    </div>
                    { this.confirmationMessage() }
                </section>
                <section className = "preview-container">
                    <h1 className = "preview-title"> View </h1>
                    <div className = "textarea" dangerouslySetInnerHTML = {this.createMarkup()}/>
                </section>
            </main>
        );
    }
}

export default connect(container.allState)(MarkdownComponents)
