import React, { useState } from 'react'
import PersonalKyc from './PersonalKyc'
import BusinessKyc from './BusinessKyc'
import BankDetails from './BankDetails'
import VpaPreference from './VpaPreference'

const OnBoardTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { name: 'Personal KYC', component: PersonalKyc, icon: "bi-person-fill" },
        { name: 'Business KYC', component: BusinessKyc, icon: "bi-briefcase-fill" },
        { name: 'Bank Details', component: BankDetails, icon: "bi-bank2" },
        { name: 'VPA Preference', component: VpaPreference, icon: "bi-phone-vibrate-fill" },
    ]
    const ActiveTabComponent = tabs[activeTab].component;
    return (
        <>
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                {tabs.map((tab, i) => (
                    <li key={i} className="nav-item" role="presentation">
                        <a className={`nav-link ${activeTab === i ? "active" : ''} text-center d-flex align-items-center`}
                            type="button" role="tab"
                            aria-controls="personalkyc-tab-pane" aria-selected="true" onClick={() => setActiveTab(i)}>
                            <div className="icon-holder">
                                <i className={`bi ${tab.icon}`}></i>
                                <i className={`bi bi-check-lg ${activeTab > i ? "d-block" : "d-none"}`}></i>
                            </div>
                            <span>{tab.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="personalkyc-tab"
                    tabIndex="0">
                    <ActiveTabComponent />
                </div>
            </div>
        </>
    )
}

export default OnBoardTab