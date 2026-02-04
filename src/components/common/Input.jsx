import React from "react";

const Input = ({
  type = "text",
  className = "",
  placeholder = "",
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
      onChange={onChange}
      required={required}
      {...rest}
    />
  );
};

export default Input;
