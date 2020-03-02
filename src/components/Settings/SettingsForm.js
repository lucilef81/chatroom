import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/containers/Field';

const SettingsForm = ({ login }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };
  return (
    <form onSubmit={handleSubmit} className="settings-form">
      <Field title="Adresse email" inputType="email" inputName="email" />
      <Field title="Mot de passe" inputType="password" inputName="password" />
      <button type="submit">Se connecter</button>
    </form>
  );
};

SettingsForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default SettingsForm;
