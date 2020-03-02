import React from 'react';

import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

const Chat = () => (
  <div id="chatroom">
    <Settings />
    <Messages />
    <Form />
  </div>
);

export default Chat;
