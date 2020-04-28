/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  name,
  passType,
  isSelected,
  onChange,
  label,
  className,
  placeholder,
  defaultChecked,
  error,
}) => (
  <div className={className}>
    <label className={className} htmlFor={passType}>
      <span className={className}>
        {label}
        <span>{error}</span>
      </span>
      <input
        type={type}
        id={passType}
        value={passType}
        name={name}
        checked={isSelected}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        defaultChecked={defaultChecked}
      />
      <figure className={className}></figure>
    </label>
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  passType: PropTypes.string,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
