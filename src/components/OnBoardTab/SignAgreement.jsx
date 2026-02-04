import React from 'react'
import FileUpload from '../common/FileUpload'
import Button from '../common/Button'

const SignAgreement = () => {
  return (
    <>
      <div className="kyc-details-section scroll-y">
        <div className="kyc-details">
          <h5 className="">Sign Agreement</h5>
          <span>Download, sign, and upload the agreement to complete onboarding.</span>
        </div>
        <div className="upload-container w-100">
          <div className="row mt-3">
            <div className="upload-document col-12">
              <label htmlFor="" className="required form-label">Upload Form</label>&nbsp;
              <FileUpload />
            </div>
            <div className="mt-2">
              <a href=""> <i className="bi bi-download me-2"></i> Download Sample Agreement Form</a>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons d-flex justify-content-end align-items-center m-4">
        <Button type='button' variant='outline-success' className="me-3">Back</Button>
        <Button type='submit' variant='none' disabled>Confirm & Proceed</Button>
      </div>
    </>
  )
}

export default SignAgreement