// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import SettingsForm from 'src/components/Settings/SettingsForm';
import { login } from 'src/actions';

// == Branchements
// lecture
const mapStateToProps = null;

// modification
const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(login());
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
