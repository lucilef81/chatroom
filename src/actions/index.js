// == action types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MODIFY_MESSAGE = 'MODIFY_MESSAGE';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const CHANGE_PSEUDO = 'CHANGE_PSEUDO';
export const CONTAIN_ERROR = 'CONTAIN_ERROR';
export const GET_THEME = 'GET_THEME';

// == action creators
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const modifyMessage = message => ({
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

export const login = () => ({
  type: LOGIN,
});

export const changePseudo = pseudo => ({
  type: CHANGE_PSEUDO,
  pseudo,
});

export const containError = () => ({
  type: CONTAIN_ERROR,
});

export const getTheme = theme => ({
  type: GET_THEME,
  payload: theme,
});
