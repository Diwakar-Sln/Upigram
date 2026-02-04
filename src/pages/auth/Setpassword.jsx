import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// Components
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useForm } from 'react-hook-form'

const Setpassword = () => {
  const { register, handleSubmit,watch,reset, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  const newPassword = watch("nPassword");
    const [showPassword, setShowPassword] = useState(false);
    function togglePassword(){
      setShowPassword(c=>!c);
    }
  return (
    <>
      <div className="text-center">
        <h2 className="h4">Set a New Password</h2>
        <p>Your new password must be different from <br /> previously used passwords</p>
      </div>
      <form className="resetpassword-form col-md-10 col-lg-6" autoComplete="off"
        onSubmit={handleSubmit((data) => { console.log(data);
          reset();
        })}
      >
        <div className="mb-3 position-relative">
          <label htmlFor='password' className="form-label required">New Password</label>
          <div className="input-group position-relative">
            <Input type={showPassword ? "text" : "password"} autoComplete="off" className="change-type"
               placeholder="Eg.Password@123"
                {...register("nPassword", {required:{value:true,message:"New Password is required"}, 
                  minLength:{value:8,message:"Password must be at least 8 characters"}}
                )}
              ></Input>
            <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} show-toggle`} onClick={togglePassword}></i>
          </div>
            {errors.nPassword && <div className="invalid-feedback d-block">{errors.nPassword?.message}</div>}
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor='password' className="form-label required">Confirm Password</label>
          <div className="input-group position-relative">
            <Input type={showPassword ? "text" : "password"} autoComplete="off" className="change-type"
               placeholder="Eg.Password@123"
               {...register("cPassword", {required:{value:true,message:"New Password is required"}, 
                  minLength:{value:8,message:"Password must be at least 8 characters"}, 
                  validate:(value)=>value===newPassword || "Passwords do not match"}
                )}
              ></Input>
            <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} show-toggle`} onClick={togglePassword}></i>
          </div>
          {errors.cPassword &&  <div className="invalid-feedback d-block">
              {errors.cPassword?.message}
            </div>}
        </div>
        <Button type="submit" className="w-100 mt-3" disabled={!isValid}>
          Reset Password
        </Button>
        <Link to='/'
          className="forgotpassword-navigator text-decoration-none d-block m-4 text-center pe-3">Back
          to Login</Link>
      </form>
    </>
  )
}

export default Setpassword