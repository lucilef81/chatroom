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
const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => {
    console.log('je veux afficher ou masquer le form');
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
