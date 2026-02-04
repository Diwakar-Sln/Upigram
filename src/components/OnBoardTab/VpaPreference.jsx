import React from 'react'
import Button from '../common/Button'

const VpaPreference = () => {
  return (
    <>
      <div className="kyc-details-section vpa-scroll scroll-y">
        <div className="kyc-details">
          <h5 className="">Set Your Business VPA</h5>
          <span>This VPA will be linked to your primary bank account and used for receiving
            payments.</span>
        </div>
        <div className="Vpa-container">
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="mb-3 ">
                <div className="badge text-bg-light border-0">VPA Created : 1 /3</div>
              </div>
              <div className="mb-3 position-relative">
                <label htmlFor="Vpacity" className="form-label required">VPA (Virtual Payment
                  Address)</label>
                <input type="text" className="form-control pe-5" id="Vpacity" placeholder="Matthewperry134"
                  required />
                  <span className="position-absolute top-50 end-0 mt-3 translate-middle-y me-3 text-secondary">@tmbbank</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="Vpacity" className="form-label required">VPA 2 (Virtual Payment
                  Address)</label>
                <div className="position-relative flex-fill">
                  <input type="text" className="form-control pe-5 " id="Vpacity"
                    placeholder="Matthewperry134345345" required />
                    <span className="position-absolute top-50 end-0 translate-middle-y me-3 text-secondary">@tmbbank</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center mt-2">
              <a href="#" className="text-danger flex-shrink-0">Remove</a>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="VpaUpigram" className="form-label required">
                  <img src="img/Star 1.svg" className="me-1" alt="" />

                    Suggested VPAs from
                    Upigram</label>
                <div className="d-flex gap-3 flex-wrap mt-1">
                  <span className="badge text-bg-light bg-transparent">Matthewperry134</span>
                  <span className="badge text-bg-light bg-transparent">matthew45342</span>
                  <span className="badge text-bg-light bg-transparent">perrymathhew2182</span>
                  <span className="badge text-bg-light bg-transparent">johnmatthew8675</span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex mt-2">
            <a href="#" className="text-success btn btn-outline-success bg-transparent">Add Another
              VPA</a>
          </div>
        </div>
      </div>
      <div className="buttons d-flex justify-content-end align-items-center m-4">
        <Button type='submit' variant='none' disabled>Submit</Button>
      </div>
    </>
  )
}

export default VpaPreference