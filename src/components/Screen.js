import React from 'react';
import ScreenRow from './ScreenRow';
import PropTypes from 'prop-types';

// Create our screen component as a functional component.
// It would display two screen rows, 1 for questions and the other for the answer
// The value would be passed down from it's parent component as a prop
const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow className='input-screen' value={props.question}/>
      <ScreenRow className='output-screen' value={props.answer}/>
    </div>
  );
}

// props expected from the parent component
Screen.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default Screen;
