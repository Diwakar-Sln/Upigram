import React from 'react'
import FileUpload from '../common/FileUpload';
import Button from '../common/Button';

const DirectorUpload = ({ title }) => {
    return (
        <div className="upload-container w-100 border rounded-3 p-3 mt-3">
            <div className="row">
                <h6 class="mb-3">{title}</h6>
                <div className="upload-document col-12">
                    <label htmlFor="" className="required form-label">PAN Card</label>
                    <FileUpload />
                    <div className="my-2 py-3 border-bottom">
                        <div className="d-flex justify-content-end">
                            <button className="btn disabled verify-btn" id="verifySoloPan"
                                data-bs-target="#fetchModal" data-bs-toggle="modal"> Verify </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <span className="fw-500 mb-2">Aadhar Card</span>
                <div className="upload-document col-6">
                    <label htmlFor="" className="required form-label">Front Side</label>
                    <FileUpload />
                </div>
                <div className="upload-document col-6">
                    <label htmlFor="" className="required form-label">Back Side</label>
                    <FileUpload />
                </div>
                <div className="py-3">
                    <div className="d-flex justify-content-end">
                        <Button variant='none' disabled>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectorUpload