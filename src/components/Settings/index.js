import React from 'react';
import { PlusCircle } from 'react-feather';
import PropTypes from 'prop-types';

import SettingsForm from 'src/containers/Settings/SettingsForm';

const Settings = ({
  open,
  toggleForm,
  logged,
  hasError,
  loading,
}) => (
  <div className={open ? 'settings' : 'settings settings--closed'}>
    <button onClick={toggleForm} className="settings-button" type="button">
      <PlusCircle />
    </button>
    {loading && (
      <p className="settings-form">Veuillez patienter ...</p>
    )}
    {!loading && (
      <>
        {hasError && <p className="settings-form">Une erreur s'est produite, vérifiez le couple email/mot de passe</p>}
        {logged && <p className="settings-form">Bienvenue</p>}
        {!logged && <SettingsForm />}
      </>
    )}
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Settings;
