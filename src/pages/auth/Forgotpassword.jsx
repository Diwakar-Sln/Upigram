import React, { use } from 'react'
import { Link } from 'react-router-dom'
// Components
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useForm } from "react-hook-form";


const Forgotpassword = () => {
  const {register,handleSubmit,reset,formState:{errors, isValid}} = useForm({mode:'onChange'});
  return (
    <>
      <div className="text-center">
        <h2 className="h4">Forgot Your Password?</h2>
        <p>A code will be sent to your email to help reset password</p>
      </div>
      <form className="login-form col-md-10 col-lg-6" autoComplete="off"
        onSubmit={handleSubmit((data)=>{console.log(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor='email' className="form-label required">Email ID</label>
          <div className="input-group has-validation">
            <Input type='email' placeholder='Enter Register Email Address' 
               {...register("email", {
                required: { value: true, message: "Email is required" }, pattern: {
                  value: /^(?!.*\.\.)([A-Za-z0-9._%+-]+)@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/, message: "Enter a valid email address"
                }
              })}
            ></Input>
          </div>
          {errors.email && <div className="invalid-feedback d-block">{errors.email?.message}</div>}
        </div>
        <Button type="submit" className="corner-radius w-100 mt-2" disabled={!isValid}>
          Reset Password
        </Button>
        <Link to='/'
          className="forgotpassword-navigator text-decoration-none d-block m-4 text-center pe-3">Back
          to Login</Link>
      </form>
    </>
  )
}

export default Forgotpassword