import React from 'react';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

const initialMessages = [
  {
    id: 1,
    author: 'Super chat',
    content: 'Salut',
  },
  {
    id: 2,
    author: 'Toto',
    content: 'Ça va ?',
  },
  {
    id: 3,
    author: 'Super chat',
    content: 'a+',
  },
];

const Chat = () => (
  <div id="chatroom">
    <Messages messages={initialMessages} />
    <Form />
  </div>
);

export default Chat;
