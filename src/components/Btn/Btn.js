import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ className, onClick, text }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);

Btn.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Btn;
