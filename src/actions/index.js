// == action types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MODIFY_MESSAGE = 'MODIFY_MESSAGE';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';

// == action creators
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const modifyMessage = (message) => ({
  type: MODIFY_MESSAGE,
  content: message,
});

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});
