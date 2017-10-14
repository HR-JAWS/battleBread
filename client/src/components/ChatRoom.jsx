// This component renders all the chat word buttons to create
// the player chat messages.

import React from 'react';
import { setChat } from '../actions.js';


class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ul className="friend-list">
        <li className="active bounceInDown">
          <a href="#" className="clearfix">
            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
            <div className="friend-name">
              <strong>John Doe</strong>
            </div>
            <div className="last-message text-muted">Hello, Are you there?</div>
            <small className="time text-muted">Just now</small>
            <small className="chat-alert label label-danger">1</small>
          </a>
        </li>
    </ul>
    );
  }
}


export default ChatRoom;