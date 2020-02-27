import React from 'react';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';

const Chat = () => (
  <div id="chatroom">
    <Messages messages={initialMessages} />
    <Form />
  </div>
);

export default Chat;
