import React, { useState } from 'react'
import Dropdown from '../common/Dropdown'
import Button from '../common/Button';
import DirectorUpload from './DirectorUpload';

const PersonalKyc = () => {
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
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <h5 className="form-label required">Business Entity Type</h5>
                            <Dropdown
                                options={entityOptions}
                                placeHolder="Select your business entity type"
                                value={entityType}
                                onChange={setEntityType} />
                        </div>
                    </div>
                    {/* Nothing selected */}
                    {entityType?.value == null && null}
                    {/* Sole Proprietor */}
                    {entityType?.value == 1 && (
                         <DirectorUpload />
                    )}
                    {/* Other entities → Director 1 & 2 */}
                    {entityType?.value !== 1 && entityType?.value != null && (
                        <>
                            <DirectorUpload title="Director 1" />
                            <DirectorUpload title="Director 2" />
                        </>
                    )}
                </div>
            </div>
            <div className="buttons d-flex justify-content-end align-items-center m-4">
                <Button variant='none' disabled>Next</Button>
            </div>
        </>
    )
}

export default PersonalKyc