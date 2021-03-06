import React from 'react';
import PropTypes from 'prop-types';
import { types, selectStyle } from './constants';
import '../../fonts.css';
import './Button.css';

function Button(props) {
  const { onClick, type, value } = props;
  const buttonStyle = selectStyle(type);

  return (
    <button
      className="canopy__button"
      onClick={onClick}
      type={type}
      style={buttonStyle}
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(types).isRequired,
  value: PropTypes.string.isRequired
}

export { Button };