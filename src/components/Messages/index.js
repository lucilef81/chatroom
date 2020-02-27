import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const Messages = ({ messages }) => (
  <div id="messages">
    {messages.map((message) => (
      <Message key={message.id} {...message} />
    ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
