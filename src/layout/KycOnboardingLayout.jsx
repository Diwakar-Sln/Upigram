import React from "react";
// Images
import logo from "../assets/images/logo_black.svg";
import symbol from "../assets/images/symbol.svg";
// React router
import { Outlet } from "react-router-dom";
// Lottie animation
import Lottie from "lottie-react";
import animationData from "../assets/animation/KYC-flower.json";

const KycOnboardingLayout = () => {
  return (
    <>
      <main className="wrapper-main">
        {/* Content container */}
        <section className="content-container">
          <div className="main-content container-fluid px-5 pt-4 pb-4">
            <div className="Onboard-verification row h-100">
              <div className="col-4 ps-0">
                <div className="welcome-container d-flex flex-column gap-5 position-relative h-100">
                  <div
                    className="welcome-message d-flex flex-column gap-4 rounded-end-0 justify-content-start align-items-center h-100 pt-5">
                    <img src={logo} className="img-fluid w-150 mb-4" alt="logo variant" />
                    <h1 className="m-0">KYC Verification</h1>
                    <p className="fs-6 text-center">To use Upigram for collections and settlements, please verify your identity
                      as per RBI regulations.
                    </p>
                    <div className="symbol d-flex align-items-center justify-content-center rounded-circle mt-2">
                      <img src={symbol} alt="logo-symbol" />
                    </div>
                    {/* Progress container */}
                    <div className="progress-container">
                      <div className="progress w-150 mt-5" role="progressbar" aria-label="Basic example" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{ width: '25%' }}></div>
                      </div>
                      <p className="text-center mt-2">25%</p>
                    </div>
                    {/* Flower dance animation */}
                    <Lottie
                      className="col-12 message-animate"
                      animationData={animationData}
                      loop={true}
                    />
                  </div>
                </div>
              </div>
              {/* Left intro ends */}
              <div className="col-8 p-0">
                <div className="kyc-process-container h-100">
                  <div className="kyc-process-content  h-100">
                    <div className="stepper-tab">
                      <Outlet />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default KycOnboardingLayout;
