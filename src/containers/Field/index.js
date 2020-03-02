// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import Field from 'src/components/Field';

// == Branchements
// lecture
const mapStateToProps = (state, ownProps) => ({
  value: state.user[ownProps.inputName],
});

// modification
const mapDispatchToProps = (dispatch) => ({
  changeValue: (value, name) => {
    console.log('je veux changer le state', value, name);
    dispatch({ type: 'CHANGE_VALUE' });
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Field);
