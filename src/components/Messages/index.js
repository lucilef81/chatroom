import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const Messages = ({ messages, theme }) => {
  const messagesElement = useRef(null);
  /*
    je veux manipuler du DOM réel ? je dois réagir APRES le rendu dans le réel -> useEffect
    je veux un pointeur vers un élement du dom réel -> useRef
  */
  useEffect(() => {
    messagesElement.current.scrollTop = messagesElement.current.scrollHeight;
  }, [messages]);
  return (
    <div ref={messagesElement} id='messages'>
      {messages.map(message => (
        <Message theme={theme} key={message.id} {...message} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  theme: PropTypes.string.isRequired,
};

export default Messages;
