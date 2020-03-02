import React from 'react';
import { PlusCircle } from 'react-feather';
import PropTypes from 'prop-types';

const Settings = ({ open }) => (
  <div className="settings">
    <button className="settings-button" type="button">
      <PlusCircle />
    </button>
    {open && (
      <div className="settings-form">*LoginForm*</div>
    )}
  </div>
);

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Settings;
