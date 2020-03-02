// == action types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MODIFY_MESSAGE = 'MODIFY_MESSAGE';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const CHANGE_VALUE = 'CHANGE_VALUE';

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

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key,
});
