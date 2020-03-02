// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import Settings from 'src/components/Settings';

// == Branchements
// lecture
const mapStateToProps = (state) => ({
  open: state.open,
});

// modification
const mapDispatchToProps = {};
// const mapDispatchToProps = (dispatch) => ({
//   toto: () => {},
// });

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
