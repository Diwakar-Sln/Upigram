import React from 'react'
import Button from '../common/Button'

const BusinessDetails = () => {
  return (
    <>
      <div className="kyc-details-section scroll-y">
        <div className="panCard-container">
          <div className="kyc-details">
            <h5 className=" d-block mb-2">Business Details</h5>
            <span>Help us understand your business better to offer you the right
              services.</span>
          </div>
          <form className="needs-validation mt-4" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="BusinessName" className="form-label required">Legal Business
                  Name</label>
                <input type="text" className="form-control" id="BusinessName"
                  placeholder="Enter your registered business name" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="businessType" className="form-label required">Business Type</label>
                <div className="custom-select dropdown">
                  <button className="custom-select__button dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span data-select-label className="text-placeholder"></span>
                    <i className="bi bi-chevron-down custom-select__chev"></i>
                  </button>
                  <input type="hidden" name="dropdown_medium" data-select-hidden
                    value="Select your business activity type" />
                  <ul className="dropdown-menu custom-select__menu">
                    <li><button type="button" className="dropdown-item" data-value="1">Sole
                      Proprietorship</button></li>
                    <li><button type="button" className="dropdown-item"
                      data-value="2">Partnership</button></li>
                    <li><button type="button" className="dropdown-item" data-value="3">Limited
                      Liability Partnership (LLP) Limited</button></li>
                    <li><button type="button" className="dropdown-item" data-value="4">Private
                      Limited Company (Pvt. Ltd.)</button></li>
                    <li><button type="button" className="dropdown-item" data-value="4">Private
                      Public Limited Company (Ltd.)</button></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cinNumber" className="form-label required">CIN (Company Identification
                  Number)</label>
                <input type="text" className="form-control" id="cinNumber"
                  placeholder="Enter your 21-digit CIN issued by MCA" required />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="panNumber" className="form-label required">PAN of Entity</label>
                <input type="text" className="form-control" id="panNumber"
                  placeholder="Enter your 10-character business PAN" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="text" className="form-label required">Business Annual Turnover (in
                  Crs)</label>
                <input type="text" className="form-control" id="city"
                  placeholder="Enter your annual turnover in crores" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="businessEntity" className="form-label required">Business
                  Entity</label>
                <div className="custom-select dropdown">
                  <button className="custom-select__button dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span data-select-label className="text-placeholder"></span>
                    <i className="bi bi-chevron-down custom-select__chev"></i>
                  </button>
                  <input type="hidden" name="dropdown_medium" data-select-hidden
                    value=" Select your type of business entity" />
                  <ul className="dropdown-menu custom-select__menu">
                    <li><button type="button" className="dropdown-item" data-value="1">Sole
                      Proprietorship</button></li>
                    <li><button type="button" className="dropdown-item"
                      data-value="2">Partnership</button></li>
                    <li><button type="button" className="dropdown-item" data-value="3">Limited
                      Liability Partnership (LLP)</button></li>
                    <li><button type="button" className="dropdown-item" data-value="4">Private
                      Limited Company (Pvt. Ltd.)</button></li>
                    <li><button type="button" className="dropdown-item" data-value="4">Private
                      Public Limited Company (Ltd.)</button></li>

                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="MCC" className="form-label required">MCC</label>
                <div className="custom-select dropdown">
                  <button className="custom-select__button dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span data-select-label className="text-placeholder"></span>
                    <i className="bi bi-chevron-down custom-select__chev"></i>
                  </button>
                  <input type="hidden" name="dropdown_medium" data-select-hidden
                    value="Select your Merchant category code (MCC)" />
                  <ul className="dropdown-menu custom-select__menu">
                    <li><button type="button" className="dropdown-item" data-value="1">5411 –
                      Grocery Stores / Supermarkets</button></li>
                    <li><button type="button" className="dropdown-item" data-value="2">5812 –
                      Eating
                      Places & Restaurants
                    </button></li>
                    <li><button type="button" className="dropdown-item" data-value="3">5814 – Fast
                      Food Restaurants</button></li>
                    <li><button type="button" className="dropdown-item" data-value="4">4111 –
                      Transportation Services</button>
                    </li>


                    <li><button type="button" className="dropdown-item" data-value="5">4814 –
                      Telecommunication Services</button>
                    </li>

                    <li><button type="button" className="dropdown-item" data-value="6">5732 –
                      Electronics Stores</button>
                    </li>

                    <li><button type="button" className="dropdown-item" data-value="7">5999 –
                      Miscellaneous Retail Stores</button>
                    </li>


                    <li><button type="button" className="dropdown-item" data-value="8">46011 –
                      Financial Institutions</button>
                    </li>

                    <li><button type="button" className="dropdown-item" data-value="9">7299 –
                      Miscellaneous Personal Services</button>
                    </li>

                    <li><button type="button" className="dropdown-item" data-value="10">
                      8999 – Professional Services (Other)</button>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="establishmentDate" className="form-label required">Incorporated Year
                </label>
                <div className="date-input-wrapper position-relative">
                  <input type="date" placeholder="Select Date" id="establishmentDate"
                    data-picker="single" className="form-control pe-5 singleDatePicker" />
                  <span id="calendar-trigger" className="calendar-icon">
                    <i className="bi bi-calendar-week"></i>
                  </span>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="gstNumber" className="form-label required">GST Number</label>
                <input type="text" className="form-control" id="gstNumber"
                  placeholder="Enter your 15-digit GSTIN" required />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mb-3">
                <label htmlFor="regOfcAddress" className="form-label required">Registered Office
                  Address</label>
                <textarea className="form-control mb-3" id="exampleFormControlTextarea1"
                  placeholder="Enter your full registered Office Address" rows="4"></textarea>
                <div className="form-check ms-1">
                  <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                  <label className="form-check-label" htmlFor="checkDefault">My Business address is
                    same
                    as my Registered Address.</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="regOfcAddress" className="form-label required">Business
                  Address</label>
                <textarea className="form-control mb-3" id="exampleFormControlTextarea1"
                  placeholder="Enter your full business address" rows="4"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <h5 className="fw-normal">Contact & Signatory Details</h5>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="mobileNumber" className="form-label required">Mobile Number</label>
                <input type="text" className="form-control" id="mobileNumber"
                  placeholder="Enter your 10-digit mobile number" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="website" className="form-label required">Website</label>
                <input type="text" className="form-control" id="website"
                  placeholder="Enter your business website URL (optional)" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="emailID" className="form-label required">Email ID</label>
                <input type="email" className="form-control" id="emailID"
                  placeholder="Enter your official business email address" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="IdProof" className="form-label required">Full Name of Owner/Authorized
                  Signatory</label>
                <input type="text" className="form-control" id="IdProof"
                  placeholder="Enter your full name as per ID proof" required />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mb-3">
                <h5 className=" fw-normal">Online Product & Service Details</h5>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="productService" className="form-label required">Products/Services
                  Offered</label>
                <input type="text" className="form-control" id="productService"
                  placeholder="Enter your products or services sold online" required />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="appDetail" className="form-label required">Application/Platform
                  Details</label>
                <input type="text" className="form-control" id="appDetail"
                  placeholder="Enter your website/app/platform name" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="deliveryMode" className="form-label required">Delivery Mode</label>
                <div className="custom-select dropdown">
                  <button className="custom-select__button dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span data-select-label className="text-placeholder"></span>
                    <i className="bi bi-chevron-down custom-select__chev"></i>
                  </button>
                  <input type="hidden" name="dropdown_medium" data-select-hidden
                    value="Select your delivery method" />
                  <ul className="dropdown-menu custom-select__menu">
                    <li><button type="button" className="dropdown-item"
                      data-value="1">Online</button></li>
                    <li><button type="button" className="dropdown-item"
                      data-value="2">Offline</button></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-3">
                <h5 className="fw-normal">Transaction Profile</h5>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="averageTransaction" className="form-label required">Average
                  Transaction
                  Value</label>
                <input type="text" className="form-control" id="averageTransaction"
                  placeholder="Enter your lowest transaction amount in ₹" required />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="minTransactionValue" className="form-label required">Minimum
                  Transaction
                  Value</label>
                <input type="text" className="form-control" id="minTransactionValue"
                  placeholder="Enter your lowest transaction amount in ₹" required />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="projectedTransactionValue" className="form-label required">Projected
                  Monthly
                  Transaction Value</label>
                <input type="text" className="form-control" id="projectedTransactionValue"
                  placeholder="Enter your expected monthly transaction count" required />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="maxTransaction" className="form-label required">Maximum Transaction
                  Value</label>
                <input type="text" className="form-control" id="maxTransaction"
                  placeholder="Enter your highest transaction amount in ₹" required />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="ProjectedMonthlyTransaction" className="form-label required">Projected
                  Monthly
                  Transaction Volume</label>
                <input type="text" className="form-control" id="ProjectedMonthlyTransaction"
                  placeholder="Enter your expected transaction volume in ₹ crores" required />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="numOfVPAs" className="form-label required">No. of VPAs
                  Required</label>
                <div className="custom-select dropdown">
                  <button className="custom-select__button dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <span data-select-label className="text-placeholder"></span>
                    <i className="bi bi-chevron-down custom-select__chev"></i>
                  </button>
                  <input type="hidden" name="dropdown_medium" data-select-hidden
                    value="Select your required number of VPAs" />
                  <ul className="dropdown-menu custom-select__menu">
                    <li><button type="button" className="dropdown-item" data-value="1">1</button>
                    </li>
                    <li><button type="button" className="dropdown-item" data-value="2">2</button>
                    </li>
                    <li><button type="button" className="dropdown-item" data-value="3">3</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12 mb-3">
                <label htmlFor="" className="form-label required">Reason for Multiple
                  VPAs</label>
                <textarea className="form-control mb-3" id=""
                  placeholder="Enhance operational efficiency and streamline our financial workflows."
                  rows="4"></textarea>
              </div>
            </div> */}
            <div className="row">
              <div className="col-12 mb-3">
                <h5 className="fw-normal">Document Upload & Legal Compliance</h5>
              </div>

              <div className="col-12">
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex justify-content-between align-items-center">
                    <span>Verification of Business Name</span>
                    <div className="d-flex gap-3">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification1"
                          id="verification1Yes" value="yes" />
                        <label className="form-check-label" htmlFor="verification1Yes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification1"
                          id="verification1No" value="no" />
                        <label className="form-check-label" htmlFor="verification1No">No</label>
                      </div>
                    </div>
                  </li>

                  <li className="d-flex justify-content-between align-items-center">
                    <span>PAN of the Entity</span>
                    <div className="d-flex gap-3">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification2"
                          id="verification2Yes" value="yes" />
                        <label className="form-check-label" htmlFor="verification2Yes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification2"
                          id="verification2No" value="no" />
                        <label className="form-check-label" htmlFor="verification2No">No</label>
                      </div>
                    </div>
                  </li>

                  <li className="d-flex justify-content-between align-items-center">
                    <span>GST Certificate of the Entity</span>
                    <div className="d-flex gap-3">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification3"
                          id="verification3Yes" value="yes" />
                        <label className="form-check-label" htmlFor="verification3Yes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification3"
                          id="verification3No" value="no" />
                        <label className="form-check-label" htmlFor="verification3No">No</label>
                      </div>
                    </div>
                  </li>

                  <li className="d-flex justify-content-between align-items-center">
                    <span>KYC Document of Owner/Authorized Signatory</span>
                    <div className="d-flex gap-3">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification4"
                          id="verification4Yes" value="yes" />
                        <label className="form-check-label" htmlFor="verification4Yes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification4"
                          id="verification4No" value="no" />
                        <label className="form-check-label" htmlFor="verification4No">No</label>
                      </div>
                    </div>
                  </li>

                  <li className="d-flex justify-content-between align-items-center">
                    <span>Board Resolution for Authorized Signatory</span>
                    <div className="d-flex gap-3">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification5"
                          id="verification5Yes" value="yes" />
                        <label className="form-check-label" htmlFor="verification2Yes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification5"
                          id="verification5No" value="no" />
                        <label className="form-check-label" htmlFor="verification5No">No</label>
                      </div>
                    </div>
                  </li>

                  <li className="d-flex justify-content-between align-items-center">
                    <span>Merchant Criminal Undertaking</span>
                    <div className="d-flex gap-3">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification6"
                          id="verification6Yes" value="yes" />
                        <label className="form-check-label" htmlFor="verification2Yes">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="verification6"
                          id="verification6No" value="no" />
                        <label className="form-check-label" htmlFor="verification6No">No</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div >
      </div >
      <div className="buttons d-flex justify-content-end align-items-center m-4">
        {/* <button type="button" class="btn btn-success" id="verifyBusinessDetailsBtn">Next</button> */}
        <Button variant='none' disabled>Next</Button>
      </div>
    </>
  )
}

export default BusinessDetails