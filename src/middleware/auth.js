import axios from 'axios';

import { LOGIN, changePseudo, containError } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('AUTH MIDDLEWARE: login passe');
      // + on traduit l'intention LOGIN en intérrogeant notre API
      // je vais avoir besoin de lire le state pour faire ma requete
      const state = store.getState();
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          // quand on a la réponse, on veut modifier le pseudo dans l'état
          // je vais vouloir émettre une intention pour modifier le state
          store.dispatch(changePseudo(response.data));
        })
        .catch((error) => {
          store.dispatch(containError());
        });
      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    default:
      console.log('AUTH MIDDLEWARE: ', action, 'passe, je laisse paser');
      next(action);
  }
};

export default auth;
