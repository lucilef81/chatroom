import axios from 'axios';
import { LOGIN, containError, getTheme } from 'src/actions';

const themeMiddleware = store => next => action => {
  const state = store.getState();
  switch (action.type) {
    case LOGIN: {
      axios
        .get(`http://localhost:3001/theme/${state.user.email}`)
        .then(res => {
          store.dispatch(getTheme(res.data));
        })
        .catch(store.dispatch(containError()));

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default themeMiddleware;
