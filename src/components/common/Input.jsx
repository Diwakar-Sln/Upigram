import React from "react";

const Input = ({
  type = "text",
  className = "",
  placeholder = "",
  value = "",
  onChange,
  required = false,
  id,
  ref,
  ...rest
}) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={`form-control ${className}`}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      {...rest}
    />
  );
};

export default Input;
