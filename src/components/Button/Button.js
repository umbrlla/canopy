import React from 'react';
import PropTypes from 'prop-types';
import { types, selectStyle } from './constants';

function Button(props) {
  const { onClick, type, value } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      style={selectStyle(type)}
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(types).isRequired,
  value: PropTypes.string
}

export { Button };