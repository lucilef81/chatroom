// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import Messages from 'src/components/Messages';

// == Branchements
// lecture
const mapStateToProps = (state) => ({
  messages: state.messages,
});

// modification
const mapDispatchToProps = {};
// const mapDispatchToProps = (dispatch) => ({
//   toto: () => {},
// });

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
