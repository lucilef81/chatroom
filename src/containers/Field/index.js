// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import Field from 'src/components/Field';

// == Branchements
// lecture
const mapStateToProps = (state) => ({
  toto: 123,
});

// modification
const mapDispatchToProps = (dispatch) => ({
  //
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(Field);
