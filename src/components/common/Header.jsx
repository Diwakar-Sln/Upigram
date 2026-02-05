import React from "react";

const Header = () => {
  return (
    <div className="page-header px-4 py-3 d-flex justify-content-between align-items-center">
      <h1 className="page-title h5">Dashboard </h1>
      <div className="user-profile d-flex align-items-center gap-4">
        <a href="/notification.html" className="">
          <i className="bi bi-bell"></i>
        </a>
        <div className="dropdown profile-dropdown">
          <button
            className="btn dropdown-toggle d-flex align-items-center gap-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="user-firstletter">
              <span className="fs-6">K</span>
            </div>
            <div className="user-name-role d-flex align-items-start flex-column gap-1">
              <h6 className="font-14 mb-0">Keya Zoya</h6>
              <span className="outfit-light">Merchant</span>
            </div>
            <i className="bi bi-chevron-down ms-2"></i>
          </button>
          <ul className="dropdown-menu ">
            <li>
              <div className="d-flex align-items-center gap-3">
                <div className="user-firstletter">
                  <span className="fs-6">K</span>
                </div>
                <div className="user-name-role">
                  <h6 className="font-14 mb-0 text-primary fs-6">Keya Zoya</h6>
                  <span className="outfit-light font-14 ">
                    Keya Zoya@upigram.com
                  </span>
                </div>
              </div>
            </li>
            <li>
              <a className="dropdown-item p-0" href="#">
                Account Details
              </a>
            </li>
            <li>
              <a className="dropdown-item text-danger p-0" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
