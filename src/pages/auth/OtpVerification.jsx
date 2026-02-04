import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Components
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { useForm } from "react-hook-form";

const OtpVerification = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  const Otp_count = 6;
  const [inputArr, setInputArr] = useState(new Array(Otp_count).fill(""));
  function handleChange(value, index) {
    console.log(value);
    const newArr = [...inputArr];
    newArr[index] = value;
    setInputArr(newArr);
  }
  return (
    <>
      <div className="text-center">
        <h2 className="h4">Check your Email</h2>
        <p>A 6 digit code will be sent to your email to <br /> you@upigram.com</p>
      </div>
      <form className="otp-enter col-md-10 col-lg-6" autoComplete="off"
        onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="container my-5">
          <div className="row g-3 justify-content-center">
            <div className="d-flex justify-content-center gap-3 otp-container">
              {inputArr.map((input, index) => {
                return <Input type="text" key={index} className="otp-input" maxLength={1}
                  
                  value={inputArr[index]} onChange={(e) => handleChange(e.target.value, index)}
                />
              })}
              {/* <Input type="number" className="otp-input" maxLength={1} {...register("otp1", { required: true, valueAsNumber:true, pattern: /^[0-9]$/ })} ></Input>
              <Input type="number" className="otp-input" maxLength={1} {...register("otp2", { required: true, valueAsNumber:true })} ></Input>
              <Input type="number" className="otp-input" maxLength={1} {...register("otp3", { required: true, valueAsNumber:true })} ></Input>
              <Input type="number" className="otp-input" maxLength={1} {...register("otp4", { required: true, valueAsNumber:true })} ></Input>
              <Input type="number" className="otp-input" maxLength={1} {...register("otp5", { required: true, valueAsNumber:true })} ></Input>
              <Input type="number" className="otp-input" maxLength={1} {...register("otp6", { required: true, valueAsNumber:true })} ></Input> */}
            </div>
            {errors && <div className="invalid-feedback d-block text-center">Invalid OTP</div>}

            <div className="col-12 d-flex justify-content-center mt-4">
              <Button type="submit" className="w-100" disabled={!isValid}>
                Next
              </Button>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column mt-3">
              <div className="d-flex align-items-center">
                <p className="mb-0 me-2">Didn't get any code?</p>
                <a className="text-decoration-none cursor-pointer">
                  Click to resend
                </a>
              </div>
              <Link to="/" className="mt-3 text-decoration-none">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default OtpVerification