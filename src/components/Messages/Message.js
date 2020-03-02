import React from 'react';
import PropTypes from 'prop-types';
import MessageStyled from './MessageStyled';

const Message = ({ author, content, theme }) => {
  return (
    <MessageStyled theme={theme}>
      <div className='message'>
        <p className='message-author'>{author}</p>
        <p className='message-content'>{content}</p>
      </div>
    </MessageStyled>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Message;
