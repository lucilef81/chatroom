import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  title,
  inputType,
  inputName,
  value,
  changeValue,
}) => (
  <div className="field">
    <label htmlFor={inputName}>{title}</label>
    <input
      value={value}
      onChange={(event) => {
        changeValue(event.target.value, event.target.name);
      }}
      id={inputName}
      name={inputName}
      type={inputType}
      placeholder={`Veuillez saisir votre ${title.toLowerCase()}`}
    />
  </div>
);

Field.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string,
  changeValue: PropTypes.func.isRequired,
};

Field.defaultProps = {
  inputType: 'text',
  value: '',
};

export default Field;
