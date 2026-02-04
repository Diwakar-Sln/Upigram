import { Link } from "react-router-dom";
// Components
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit,reset, formState: { errors, isValid } } = useForm({mode: 'onChange'});
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword(){
    setShowPassword(c=>!c);
  }
  return (
    <>
      <div className="text-center">
        <h2 className="h4">Welcome to UPIgram</h2>
        <p>
          Securely sign-in to your UPIgram account
          <br /> using your registered credentials.
        </p>
      </div>
      {/* Title geos here */}
      {/* Login Form starts  */}
      <form
        className="login-form col-md-10 col-lg-6"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label required">
            Email ID
          </label>
          <div className="input-group has-validation">
            <Input
              type="email"
              placeholder="Enter your registered email"
              {...register("email", {
                required: { value: true, message: "Email is required" }, pattern: {
                  value: /^(?!.*\.\.)([A-Za-z0-9._%+-]+)@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/, message: "Enter a valid email address"
                }
              })}
            ></Input>
            <div className="invalid-feedback d-block">{errors.email?.message}</div>
          </div>
        </div>
        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label required">
            Password
          </label>
          <div className="input-group position-relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="change-type"
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: { value: 8, message: "Password must be at least 8 characters" }
              })}
            ></Input>
            {/* Hide & show eye */}
            <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} show-toggle`} onClick={togglePassword}></i>
          </div>
            {errors.password && <div className="invalid-feedback d-block">{errors.password?.message}</div> }
        </div>
        <Link
          to="/forgot-password"
          className="forgotpassword-navigator text-decoration d-inline-block float-end mb-4"
        >
          ForgotPassword?
        </Link>
        <Button type="submit" className="w-100" disabled={!isValid}>
          Sign In
        </Button>
      </form>
      {/* form ends here */}
    </>
  );
};

export default Login;
