import React from 'react';
import PropTypes from 'prop-types';

const Button = ({value, className, type, handleClick, label, ...rest}) => {
  return (
    <input
      type="button"
      className={
        `${className} i-btn ${type === 'action' ?
          'button action-button' :
          'button input-button'}`
      }
      onClick={handleClick}
      value={label}
      {...rest}
    />
  );
}

// describe our expected props types
Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Button;
