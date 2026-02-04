import React, {useState} from 'react'
import FileUpload from '../common/FileUpload'
import Button from '../common/Button'
import BankDropdown from '../common/BankDropdown'

const PrimaryAccount = () => {
    const entityOptions = [
        { label: "Sole Proprietorship", value: 1 },
        { label: "Partnership", value: 2 },
        { label: "LLP", value: 3 },
        { label: "Private Limited", value: 4 },
        { label: "Public Limited", value: 5 },
    ]
    const [entityType, setEntityType] = useState(null);
    return (
        <>
            <div className="kyc-details-section scroll-y">
                <div className="panCard-container">
                    <div className="kyc-details mb-3">
                        <h5 className="">Add Primary Account</h5>
                        <span>This account will be used for all settlements and transactions.</span>
                    </div>
                    <div className="primary-account">
                        <form action="">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label required">Bank Name</label>
                                        <BankDropdown
                                            options={entityOptions}
                                            placeHolder="Select your business entity type"
                                            value={entityType}
                                            onChange={setEntityType}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="BusinessName" className="form-label required">Account
                                            Nuber</label>
                                        <input type="text" className="form-control"
                                            placeholder="Enter your account number" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="" className="form-label required">Enter IFSC Code</label>
                                    <input type="text" className="form-control" placeholder="Enter your IFSC code" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="" className="form-label required">Account Holder Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name here" />
                                </div>
                            </div>
                            <div className="panCard-container">
                                <div className="upload-container w-100">
                                    <div className="row mt-3">
                                        <div className="upload-document col-12">
                                            <label htmlFor="" className="required form-label">Upload Passbook or
                                                Cancelled
                                                Cheque</label>&nbsp;
                                            <FileUpload />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="buttons d-flex justify-content-end align-items-center m-4">
                <Button type='submit' variant='none' disabled>Confirm & Proceed</Button>
            </div>
        </>
    )
}

export default PrimaryAccount