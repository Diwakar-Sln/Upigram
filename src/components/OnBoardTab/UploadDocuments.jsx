import React from 'react'
import FileUpload from '../common/FileUpload'
import Button from '../common/Button'

const UploadDocuments = () => {
  return (
    <>
      <div className="kyc-details-section scroll-y">
        <div className="kyc-details">
          <h5 className="">Upload Business Documents</h5>
          <span>Submit a clear photos of your business documents to help us verify your
            business.</span>
        </div>
        <div className="upload-container w-100">
          <div className="row mt-3">
            <div className="upload-document col-6">
              <label htmlFor="" className="required form-label">Certification of Incorporation
                (COI)</label>&nbsp; <i className="bi bi-info-circle info" data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Upload the official COI issued by the Registrar of Companies to verify your business registration."></i>
              <FileUpload />
            </div>
            <div className="upload-document col-6">
              <label htmlFor="" className="required form-label">MOA/AOA</label>&nbsp; <i
                className="bi bi-info-circle info" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Upload your company’s Memorandum or Articles of Association in full, as issued by the ROC."></i>
              <FileUpload />
            </div>

            <div className="upload-document mt-4 col-6">
              <label htmlFor="" className="required form-label">Company PAN / TAN</label>&nbsp; <i
                className="bi bi-info-circle info" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Upload your company’s valid PAN or TAN card  to confirm your tax registration details."></i>
              <FileUpload />
            </div>
            <div className="upload-document mt-4 col-6">
              <label htmlFor="" className="required form-label">GST Certificate</label>&nbsp; <i
                className="bi bi-info-circle info" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Upload the GST registration certificate issued by the government to validate your GSTIN."></i>
              <FileUpload />
            </div>
            <div className="upload-document mt-4 col-6">
              <label htmlFor="" className="required form-label">Compliance Docs</label>&nbsp; <i
                className="bi bi-info-circle info" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="INC-22  (Registered  Office),  INC-20A  (Commencement), MCA Annual Filings (MGT-7, AOC-4, etc.) "></i>
              <FileUpload />
            </div>
            <div className="upload-document mt-4 col-6">
              <label htmlFor="" className="required form-label">Additional Documents</label>&nbsp; <i
                className="bi bi-info-circle info" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Upload any UBO Declaration, Domain Proof, Shareholder List"></i>
              <FileUpload />
            </div>
          </div>
        </div>

        {/* <div className="kyc-details mt-4">
          <label className="fs-4 d-block mb-2">Upload Business Documents</label>
          <span>Submit a clear photos of your business documents to help us verify your
            business.</span>
        </div>
        <div className="upload-container w-100">
          <div className="row mt-3">
            <div className="upload-document col-6">
              <label htmlFor="" className="required form-label">Address Proof</label>&nbsp; <i
                className="bi bi-info-circle info" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Upload a valid government-issued ID (Aadhaar, Passport, or Voter ID) showing your current address."></i>
              <FileUpload />
            </div>
            <div className="upload-document col-6">
              <label htmlFor="" className="required form-label">Business Proof</label>&nbsp; <i
                className="bi bi-info-circle info" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Upload a valid document that confirms your business registration, such as GST Certificate, Udyam/MSME Registration, or Shop & Establishment License."></i>
              <FileUpload />
            </div>
            <div className="upload-document mt-4 col-6">
              <label htmlFor="" className="required form-label">Additional Documents</label>&nbsp; <i
                className="bi bi-info-circle info" data-bs-toggle="tooltip" data-bs-placement="bottom"
                title="Recent  Photograph,  Business  Address  Proof  (Utility  Bill/Rental Agreement)"></i>
              <FileUpload />
            </div>
          </div>
        </div> */}
      </div>
      <div className="buttons d-flex justify-content-end align-items-center m-4">
        <Button type='button' variant='outline-success' className="me-3">Back</Button>
        <Button type='submit' variant='none' disabled>Confirm & Proceed</Button>
      </div>
    </>
  )
}

export default UploadDocuments