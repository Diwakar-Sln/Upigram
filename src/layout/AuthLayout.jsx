import logincircle from "../assets/images/login_circle_bg.svg";
import logo from "../assets/images/Logo.svg";
// Lottie animation
import Lottie from "lottie-react";
import animationData from "../assets/animation/login.json";
// React router
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="wrapper-main">
        {/* Content container */}
        <section className="content-container">
          <div className="main-content vh-100">
            <div className="login-container d-flex h-100" id="login1">
              <div className="col-6 d-flex flex-column green-gradient align-items-center justify-content-center position-relative gap-5">
                <img
                  src={logincircle}
                  className="img-fluid login-background"
                  alt="login background"
                />
                <div className="text-center">
                  <img src={logo} className="img-fluid" alt="logo" />
                  {/* Carousel text begins */}
                  <div
                    id="carouselIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <h1 className="h5 text-white mt-5">
                          Fintech made
                          <span className="text-active">
                            simple for rural India
                          </span>
                        </h1>
                        <p>
                          Secure, smart, and accessible banking solutions—right
                          at your fingertips.
                        </p>
                      </div>
                      {/* item 1 */}
                      <div className="carousel-item">
                        <h1 className="h5 text-white mt-5">
                          Instant Transfers
                        </h1>
                        <p>
                          Make instant and safer individual and bulk business
                          bills and payments with single secure UPI ID.
                        </p>
                      </div>
                      {/* item 2 */}
                      <div className="carousel-item">
                        <h1 className="h5 text-white mt-5">UPI Tap & Pay</h1>
                        <p>
                          Transfer your business bills and payments to any
                          account instantly from anywhere with authorised Tap &
                          Pay option.
                        </p>
                      </div>
                      {/* item 3 */}
                      <div className="carousel-item">
                        <h1 className="h5 text-white mt-5">
                          User Friendly Interface
                        </h1>
                        <p>
                          AI powered efficiency for simplified merchant
                          onboarding.
                        </p>
                      </div>
                      {/* item 4 */}
                    </div>
                    {/* Carousel inner */}
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      ></button>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  {/* Login animation */}
                  <Lottie
                    animationData={animationData}
                    loop={true}
                  />
                </div>
              </div>
              {/* Left intro */}
              <div className="col-6 d-flex flex-column align-items-center justify-content-center position-relative">
                <Outlet />
                 <div className="position-absolute assitance"><span>Need assistance?</span> 
                 <a href="#"
                className="d-flex-inline">Sales@upigram.com <i className="bi bi-arrow-right"></i></a></div>
              </div>
            </div>
            {/* Login container */}
          </div>
        </section>
        {/* Container */}
      </main>
      {/* Main wrapper */}
    </>
  );
};

export default AuthLayout;
