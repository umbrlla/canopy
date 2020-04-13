import React from 'react';
import PropTypes from 'prop-types';
import { types } from './constants';
import '../../fonts.css';
import './Checkbox.css';

function Checkbox(props) {
  const { onChange, checked, value } = props;

  return(
    <label className="canopy__checkbox-container">
      <input
        type="checkbox"
        onChange={onChange}
      />
      <span className="canopy__checkbox-mark"></span>
      {value}
    </label>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  text: PropTypes.string
}

export { Checkbox };
