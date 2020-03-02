const debug = (store) => (next) => (action) => {
  /*
    un middleware est une fonction qu'on va donner au store
    le store s'en servira pour traduire des actions vers des effets (autre qu'une modification de state, pour ça il y a le reducer) par ex : du debug, des requetes ajax, des timers, ...
    l'objet action passera tour à tour dans chaque middleware puis arrivera enfin dans le reducer
    dans un middleware on a accès :
    - store : et à ses méthodes getState (lecture du state) et dispatch (émission d'intention)
    - next : la fonction qui dit explicitement si on laisse passer ou non une action, si on n'appelle pas next(action) dans le middleware l'action n'arrive pas au middleware/reducer suivant, si on l'appelle l'action passe au middleware/reducer suivant
    - action : l'objet action, l'intention qu'on a intercépté et qu'on va potentielement traduire
  */
  console.log('je passe dans mon middleware');
  // next(action);
};

export default debug;
