import axios from 'axios';

import { LOGIN } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN:
      console.log('AUTH MIDDLEWARE: login passe, je court-circuite');
      axios.post('http://localhost:3001/login', {
        email: 'captain.sportsextremes@herocorp.io',
        password: 'pingpong',
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      console.log('AUTH MIDDLEWARE: ', action, 'passe, je laisse paser');
      next(action);
  }
};

export default auth;
