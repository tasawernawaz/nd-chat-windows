import React, {Component} from 'react';


class ChatForm extends Component {
    state = {
        message: ''
    }

    isDisabled = () => {
        return this.message === '';
    };

    handleInputChange = (event) => {

        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.message)
    })

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={this.state.message}
                    placeholder="Enter your message..."
                    onChange={(event) => this.handleInputChange(event)}
                />
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled}>
                    SEND
                    </button>
                </div>
                </form>
            </div>
        )
    }
}

export default ChatForm;