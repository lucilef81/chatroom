import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ addMessage, value }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage();
  };
  return (
    <form onSubmit={handleSubmit} id="form">
      <input
        value={value}
        type="text"
        placeholder="Saisissez votre message ..."
      />
      <button type="submit">&gt;</button>
    </form>
  );
};

Form.propTypes = {
  addMessage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Form;
