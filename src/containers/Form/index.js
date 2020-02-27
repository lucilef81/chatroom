import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { addMessage, modifyMessage } from 'src/actions';

const mapStateToProps = (state) => ({
  value: state.newMessageValue,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: () => {
    dispatch(addMessage());
  },
  changeValue: (newValue) => {
    // const action = { type: 'CHANGE_MESSAGE', content: newValue };
    const action = modifyMessage(newValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
