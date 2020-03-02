import {
  ADD_MESSAGE,
  MODIFY_MESSAGE,
  TOGGLE_OPEN,
} from 'src/actions';
import { getNextId } from 'src/selectors';

const initialState = {
  user: {
    email: 'toto',
    password: '123',
  },
  open: true,
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
};

// reducer = traducteur d'une intention/action vers une modification du state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // je déclare un noubel objet message
      const aNewMessage = {
        id: getNextId(state.messages),
        author: 'Super chat',
        content: state.newMessageValue,
      };
      // je déclare une nouvelle liste de messages avec les messages actuels et le nouveau
      const newMessages = [
        ...state.messages,
        aNewMessage,
      ];
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
    default:
      return state;
  }
};

export default reducer;
