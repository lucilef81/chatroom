import React from 'react';
import { PlusCircle } from 'react-feather';
import PropTypes from 'prop-types';

import SettingsForm from './SettingsForm';

const Settings = ({ open, toggleForm }) => (
  <div className={open ? 'settings' : 'settings settings--closed'}>
    <button onClick={toggleForm} className="settings-button" type="button">
      <PlusCircle />
    </button>
    <SettingsForm />
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default Settings;
