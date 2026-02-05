import React from "react";
import file from "../assets/images/file.svg";

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="card card-green px-3 py-3 d-flex h-100">
            <div className="card px-4 py-3 card-opacity d-flex flex-column justify-content-between h-100">
              <h5 className="card-title">Settlements Details</h5>
              <div className="settlement-container d-flex gap-5">
                <div className="col d-flex flex-column gap-3">
                  <h6 className="text-highlight">Upcoming Settlement</h6>
                  <div id="upcoming-settle" className="upcoming-settlement">
                    <h1 className="rupee ff-outfit-medium">0.00</h1>
                    <p className="mt-2">
                      This is the total value of payments that are still pending
                      settlement, as per UPIgram’s latest records.
                    </p>
                  </div>
                  <div className="card px-3 py-2 d-flex flex-row gap-2">
                    <i className="bi bi-calendar text-highlight"></i>
                    <span>Payment Date:</span>
                    <h6 className="ff-outfit-medium rupee mb-0">0.00</h6>
                  </div>
                </div>
                <div className="col d-flex flex-column gap-3 ps-4 border-start">
                  <h6>Settlement Distribution</h6>
                  <div id="total-settle" className="total-settle-amt">
                    <span>Total Settled Amount</span>
                    <h4 className="rupee mt-2 ff-outfit-medium">0.00</h4>
                  </div>
                  <div id="previous-settle" className="prev-settle-amt">
                    <span>Previous Settlement</span>
                    <h4 className="rupee mt-2 ff-outfit-medium">0.00</h4>
                  </div>
                </div>
              </div>
              <div id="treeMoney"></div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card card-transaction">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title">Transaction Details</h5>
              <div className="custom-select dual-date-picker dropdown position-relative">
                <button
                  className="custom-select__button dropdown-toggle custom-range-picker"
                  data-listing="1"
                  data-bs-toggle="dropdown"
                >
                  <span data-select-label className="text-placeholder">
                    Last 30 Days
                  </span>
                  <i className="bi bi-chevron-down custom-select__chev"></i>
                </button>
                <input
                  type="hidden"
                  data-select-hidden
                  value="Last 30 Days"
                  data-value="30"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="transaction-details-content d-flex align-items-center justify-content-between">
                <div className="total-transaction">
                  <p className="m-1">
                    Total Transactions <span className="ms-1">0</span>
                  </p>
                  <h4 className="m-0 ps-1 rupee">₹ 0000.00</h4>
                </div>
                <div className="transaction-summary">
                  <p className="m-0">
                    {" "}
                    <span className="text-success me-1">0</span>Hii
                  </p>
                </div>
              </div>
              <div className="transaction-details-chart-container">
                <canvas id="transaction-details-chart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-5">
          <div className="card chart-bar">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title">Refund & Chargeback</h5>
              <div
                className="custom-select dropdown position-relative"
                data-type="dropdown"
              >
                <button
                  className="custom-select__button dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span data-select-label className="text-placeholder">
                    Refund
                  </span>
                  <i className="bi bi-chevron-down custom-select__chev"></i>
                </button>
                <input
                  type="hidden"
                  name="dropdown_medium"
                  data-select-hidden
                  value="Refund"
                />
                <ul className="dropdown-menu custom-select__menu">
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      data-value="refund"
                    >
                      Refund
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      data-value="chargeback"
                    >
                      chargeback
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container">{/* Chart goes here */}</div>
              <div className="empty-container">
                <div className="icon-holder">
                  <img src={file} className="img-fluid" alt="empty refund" />
                </div>
                <h6>You don’t have any refund transactions yet</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card chart-line">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title">Weekly Performance Report</h5>
            </div>
            <div className="card-body">
              <div className="wpr-app-card__content">
                <canvas
                  id="wpr-weeklyPerformanceChart"
                  className="wpr-chartjs-canvas"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
