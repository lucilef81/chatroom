import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addMessage, value, changeValue }) => {
  const inputElement = useRef(null);
  useEffect(() => {
    inputElement.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage();
  };
  const handleChange = (event) => {
    changeValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} id="form">
      <input
        value={value}
        type="text"
        placeholder="Saisissez votre message ..."
        onChange={handleChange}
        ref={inputElement}
      />
      <button type="submit">&gt;</button>
    </form>
  );
};

Form.propTypes = {
  addMessage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Form;
