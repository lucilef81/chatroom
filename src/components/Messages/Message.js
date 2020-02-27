import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ author, content }) => (
  <div className="message">
    <p className="message-author">{author}</p>
    <p className="message-content">{content}</p>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
