import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { addMessage } from 'src/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  addMessage: () => {
    dispatch(addMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
