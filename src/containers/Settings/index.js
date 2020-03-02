// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import Settings from 'src/components/Settings';
import { toggleOpen } from 'src/actions';

// == Branchements
// lecture
const mapStateToProps = (state) => ({
  open: state.open,
  logged: state.logged,
  hasError: state.hasError,
  loading: state.loading,
});

// modification
const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => {
    dispatch(toggleOpen());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
