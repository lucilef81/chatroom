import React from 'react';

import Field from 'src/containers/Field';

const SettingsForm = () => (
  <form className="settings-form">
    <Field title="Adresse email" inputType="email" inputName="email" />
    <Field title="Mot de passe" inputType="password" inputName="password" />
    <button type="submit">Se connecter</button>
  </form>
);

export default SettingsForm;
