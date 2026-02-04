import React, { useState } from 'react'
import BusinessDetails from './BusinessDetails';
import UploadDocuments from './UploadDocuments';
import SignAgreement from './SignAgreement';

const BusinessKyc = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: 'Business Details', component: BusinessDetails },
    { name: 'Upload Documents', component: UploadDocuments },
    { name: 'Sign Agreement', component: SignAgreement },
  ]
  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div className="tab-two-content mt-3">
      <ul className="nav nav-tabs border-0 p-0" id="myTab" role="tablist">
        {tabs.map((tab, i) => (
          <li className="nav-item" role="presentation" key={i}>
            <a className={`nav-link text-center position-relative ${activeTab === i ? "active" : ''}`} type="button" role="tab"
              aria-controls="home-tab-pane" aria-selected="true" onClick={() => setActiveTab(i)}><span>{tab.name}</span></a>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="business-details-tab-pane" role="tabpanel"
          aria-labelledby="business-details-tab" tabIndex="0">
          <ActiveTabComponent />
        </div>
      </div>
    </div>
  )
}

export default BusinessKyc