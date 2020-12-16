import React, {Component} from 'react';
import ChatForm from './ChatForm';

class ChatWindow extends Component {

    handleSubmit = (message) => {
        this.props.handleNewMessage(message, this.props.username);
    }

    render () {
        const {username, messages} = this.props;

        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{username}</div>

                <ul className="message-list">
                    {messages.map((message, index) => (
                    <li
                        key={index}
                        className={
                        message.username === username ? 'message sender' : 'message recipient'
                        }
                    >
                        <p>{`${message.username}: ${message.text}`}</p>
                    </li>
                    ))}
                </ul>

                <ChatForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}


export default ChatWindow;
