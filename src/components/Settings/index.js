import React from 'react';
import { PlusCircle } from 'react-feather';

const Settings = () => (
  <div className="settings">
    <button className="settings-button" type="button">
      <PlusCircle />
    </button>
    {true && (
      <div className="settings-form">*LoginForm*</div>
    )}
  </div>
);

export default Settings;
