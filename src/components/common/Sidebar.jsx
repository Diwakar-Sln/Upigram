import React from "react";
import logo from "../../assets/images/Logo.svg";

const Sidebar = () => {
  return (
    <aside className="navigation-container d-flex flex-column py-4 gap-3">
      <a href="dashboard.html" className="ps-3">
        <img src={logo} alt="logo" className="img-fluid" />
      </a>
      <div className="d-flex justify-content-between flex-column h-100 ">
        <nav className="nav flex-column border-top pt-3 px-3 gap-3">
          <a
            className="nav-link active"
            aria-current="page"
            href="dashboard.html"
          >
            <div className="divide">
              {/* <svg>
                    <use xlink:href="img/svg/icons.svg#icon-dashboard"></use>
                  </svg> */}
              <span>Dashboard</span>
            </div>
          </a>
          <a className="nav-link" href="merchant-list.html">
            <div className="divide">
              {/* <svg>
                    <use xlink:href="img/svg/icons.svg#icon2"></use>
                  </svg> */}
              <span>Merchant Account</span>
            </div>
          </a>
          <a className="nav-link" href="reseller-list.html">
            <div className="divide">
              {/* <svg>
                  <use xlink:href="img/svg/icons.svg#icon3"></use>
                </svg> */}
              <span>Reseller Account</span>
            </div>
          </a>
          <li className="nav-item">
            <a
              className="nav-link has-submenu"
              data-bs-toggle="collapse"
              href="#transactHubMenu"
              role="button"
              aria-expanded="false"
              aria-controls="transactHubMenu"
            >
              <div className="divide">
                {/* <svg>
                      <use xlink:href="../img/svg/icons.svg#icon4"></use>
                    </svg> */}
                <span>Transaction Hub</span>
              </div>
              <i className="bi bi-chevron-down"></i>
            </a>

            <div className="collapse submenu-container" id="transactHubMenu">
              <ul className="nav flex-column px-3 py-2">
                <li className="nav-item">
                  <a
                    className="nav-link-sub active"
                    href="./cpm - Transaction-HUB/transaction-list.html"
                  >
                    <i className="bi bi-dot"></i>
                    <span>Transactions</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link-sub"
                    href="./cpm - Transaction-HUB/settlement-list-transactions.html"
                  >
                    <i className="bi bi-dot"></i>
                    <span>Settlements</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link-sub"
                    href="./cpm - Transaction-HUB/settlement-refund-list-transactions.html"
                  >
                    <i className="bi bi-dot"></i>
                    <span>Refunds</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link has-submenu"
              data-bs-toggle="collapse"
              href="#paymentToolsMenu"
              role="button"
              aria-expanded="false"
              aria-controls="paymentToolsMenu"
            >
              <div className="divide">
                {/* <svg>
                      <use xlink:href="../img/svg/icons.svg#icon5"></use>
                    </svg> */}
                <span>Payment Tools</span>
              </div>
              <i className="bi bi-chevron-down"></i>
            </a>

            <div className="collapse submenu-container" id="paymentToolsMenu">
              <ul className="nav flex-column px-3 py-2">
                <li className="nav-item">
                  <a
                    className="nav-link-sub active"
                    href="./cpm-payment-button/paymentlinks.html"
                  >
                    <i className="bi bi-dot"></i>
                    <span>Payment Links</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link-sub"
                    href="./cpm-payment-button/payment-button-list.html"
                  >
                    <i className="bi bi-dot"></i>
                    <span>Payment Buttons</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link-sub"
                    href="./cpm-payment-button/payment-page-list.html"
                  >
                    <i className="bi bi-dot"></i>
                    <span>Payment Pages</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <a
            className="nav-link"
            href="/cpm-Reconcilation/Reconciliation List.html"
          >
            <div className="divide">
              {/* <svg>
                    <use xlink:href="img/svg/icons.svg#icon6"></use>
                  </svg> */}
              <span>Reconciliation</span>
            </div>
            <small className="badge rounded-2 text-success">8</small>
          </a>
          <a className="nav-link" href="dispute.html">
            <div className="divide">
              {/* <svg>
                    <use xlink:href="img/svg/icons.svg#icon7"></use>
                  </svg> */}
              <span>Dispute</span>
            </div>
            <small className="badge rounded-2 text-success">8</small>
          </a>
          <a className="nav-link" href="developer-tools.html">
            <div className="divide">
              {/* <svg>
                    <use xlink:href="img/svg/icons.svg#icon7"></use>
                  </svg> */}
              <span>Developer Tools</span>
            </div>
            <i className="bi bi-chevron-down"></i>
          </a>
        </nav>
        <nav className="nav flex-column border-top pt-3 px-3 gap-3">
          <a className="nav-link" aria-current="page" href="settings.html">
            <div className="divide">
              {/* <svg>
                    <use xlink:href="img/svg/icons.svg#icon9"></use>
                  </svg> */}
              <span>Settings</span>
            </div>
          </a>
          <a className="nav-link" href="support.html">
            <div className="divide">
              {/* <svg>
                    <use xlink:href="img/svg/icons.svg#icon10"></use>
                  </svg> */}
              <span>Help & Support</span>
            </div>
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
