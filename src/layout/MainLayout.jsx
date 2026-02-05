import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const MainLayout = () => {
  return (
    <>
      <main className="wrapper-main d-flex flex-nowrap position-relative vh-100 w-100">
        <Sidebar />
        <section className="content-container along-with-nav">
          <Header />
          <div className="main-content container-fluid d-flex flex-column px-4 py-4 gap-3 scroll-y">
            <Outlet />
          </div>
        </section>
      </main >
    </>
  );
};

export default MainLayout;
