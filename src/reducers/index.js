const initialState = {
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
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
