import React from "react";

const Button = ({
  type = "button",
  variant = "success",
  onClick,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      onClick={onClick}
      className={`btn btn-${variant} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
