import {
  ADD_MESSAGE,
  MODIFY_MESSAGE,
  TOGGLE_OPEN,
  CHANGE_VALUE,
  CHANGE_PSEUDO,
  CONTAIN_ERROR,
  LOGIN,
  GET_THEME,
} from 'src/actions';
import { getNextId } from 'src/selectors';

const initialState = {
  hasError: false,
  logged: false,
  loading: false,
  user: {
    email: '',
    password: '',
    pseudo: 'Anonyme',
  },
  open: false,
  newMessageValue: '',
  messages: [
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
    {
      id: 4,
      author: 'Super chat',
      content: 'Bisous !',
    },
  ],
  theme: '',
};

// reducer = traducteur d'une intention/action vers une modification du state
const reducer = (state = initialState, action = {}) => {
  console.log('REDUCER :', action);
  switch (action.type) {
    case ADD_MESSAGE: {
      // je déclare un noubel objet message
      const aNewMessage = {
        id: getNextId(state.messages),
        author: state.user.pseudo,
        content: state.newMessageValue,
      };
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      const newMessages = [...state.messages, aNewMessage];
      // je retourne un nouveau state avec ce qu'il contenait déjà et ma nouvelle liste de message
      return {
        ...state,
        messages: newMessages,
        newMessageValue: '',
      };
    }
    case MODIFY_MESSAGE:
      return {
        ...state,
        newMessageValue: action.content,
      };
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.key]: action.value,
        },
      };
    case CHANGE_PSEUDO:
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: action.pseudo,
        },
        open: false,
        logged: true,
        hasError: false,
        loading: false,
      };
    case CONTAIN_ERROR:
      return {
        ...state,
        hasError: true,
        loading: false,
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
