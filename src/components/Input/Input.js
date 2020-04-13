import React from 'react';
import PropTypes from 'prop-types';
import { types } from './constants';
import '../../fonts.css';
import './Input.css';

function Input(props) {
  const { type, placeholder, onChange } = props;

  return (
    <input
      className="canopy__input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    >
    </input>
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf(types).isRequired,
}

export { Input };
