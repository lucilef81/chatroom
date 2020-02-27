import { ADD_MESSAGE } from 'src/actions';

const initialState = {
  newMessageValue: 'salut',
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

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // je déclare un noubel objet message
      const aNewMessage = {
        id: 5,
        author: 'Super chat',
        content: 'un message',
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
      };
    }
    default:
      return state;
  }
};

export default reducer;
