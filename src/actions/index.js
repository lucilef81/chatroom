// == action types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MODIFY_MESSAGE = 'MODIFY_MESSAGE';

// == action creators
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const modifyMessage = (message) => ({
  type: MODIFY_MESSAGE,
  content: message,
});
