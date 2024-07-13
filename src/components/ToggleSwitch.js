import React from 'react';

const ToggleSwitch = ({ toggleTheme, theme }) => {
  return (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        id="flexSwitchCheckDefault"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <label className="form-check-label" htmlFor="cflexSwitchCheckDefault">
        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </label>
    </div>
  );
};

export default ToggleSwitch;
