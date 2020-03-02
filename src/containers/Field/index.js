// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import Field from 'src/components/Field';
import { changeValue } from 'src/actions';

// == Branchements
// lecture
const mapStateToProps = (state, ownProps) => ({
  value: state.user[ownProps.inputName],
});

// modification
const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Field);
