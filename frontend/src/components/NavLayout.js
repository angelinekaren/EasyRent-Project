import Navbar from "./Navbar";
import React, { useState } from "react";
import NavbarOwners from "./NavbarOwners";
import NavbarRenters from "./NavbarRenters";
import NavbarAdmin from "./NavbarAdmin";
import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import { authenticationService } from "../services/authentication.service";

function NavLayout() {
  const currentUser = authenticationService.getCurrentUser();

  return (
    <div>
      {(() => {
        if (currentUser) {
          if (currentUser.user.role === "admin") {
            return <NavbarAdmin />;
          }
          if (currentUser.user.role === "landlord") {
            return <NavbarOwners />;
          }
          if (currentUser.user.role === "tenant") {
            return <NavbarRenters />;
          }
        } else {
          return <Navbar />;
        }
      })()}
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default NavLayout;
