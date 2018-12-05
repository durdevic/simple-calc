import React from 'react';
import PropTypes from 'prop-types';

// Screen row component is written as a functional component
// it receives and displays (in an input field) a props (property) of value from
// it's parent component
const ScreenRow = (props) => {
  return (
    <div className="row">
      <input className={`${props.className}`} type="text" readOnly value={props.value}/>
    </div>
  )
}

// props that the parent element is required to pass into this component
ScreenRow.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ScreenRow;
