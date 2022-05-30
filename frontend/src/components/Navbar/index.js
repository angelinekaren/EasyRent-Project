import { React, useEffect, useState, useRef, useLayoutEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import LoginIcon from "@mui/icons-material/LoginRounded";
import SignupIcon from "@mui/icons-material/PersonAddAltRounded";
import logo from "../../images/easyrent_logo.png";
import { animateScroll as scroll } from "react-scroll";
import Divider from "@mui/material/Divider";
import "./Navbar.css";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
  NavSignInUpMenu,
  NavSignInLink,
  NavSignInItem,
  BrandTitle,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
  SideMenu,
  SidebarSignLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [navChangeColor, setNavChangeColor] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavChangeColor(true);
    } else {
      setNavChangeColor(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  window.addEventListener("scroll", changeNavbarColor);

  const handleToggleHome = () => {
    scroll.scrollToTop();
    setSidebar(false);
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useLayoutEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
    if (!sidebar) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [sidebar]);

  return (
    <>
      <div className={`overlay ${sidebar ? "visible" : ""}`} />
      <Nav className={navChangeColor ? "navbar active" : "navbar"}>
        <NavContainer>
          <NavLogo to="/" onClick={handleToggleHome}>
            <img src={logo} alt="EasyRent Logo" width="38" height="33" />
            <BrandTitle>EasyRent</BrandTitle>
          </NavLogo>
          {!mobile && (
            <>
              <NavMenu>
                <NavItem>
                  <NavLink
                    offset={-50}
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    offset={-50}
                    to="explore"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                  >
                    Explore
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    offset={-50}
                    to="aboutus"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    offset={-50}
                    to="contactus"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
              </NavMenu>
              <NavSignInUpMenu>
                <NavSignInItem>
                  <NavSignInLink to="/login">Log In</NavSignInLink>
                </NavSignInItem>
                <NavBtn>
                  <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>
              </NavSignInUpMenu>
            </>
          )}
          {mobile && (
            <div className="sidebar-toggle">
              <FaBars
                className="sidebar-logo-toggle"
                onClick={() => setSidebar(!sidebar)}
              />
            </div>
          )}
        </NavContainer>
      </Nav>
      <div ref={ref} className={sidebar ? "sidebar active" : "sidebar"}>
        {mobile && (
          <div className="sidebar-toggle">
            <FaTimes
              className="sidebar-logo-toggle"
              onClick={() => setSidebar(!sidebar)}
            />
          </div>
        )}
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              <HomeIcon style={{ color: "black", marginRight: "0.7rem" }} />
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="explore"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              <ExploreIcon style={{ color: "black", marginRight: "0.7rem" }} />
              Explore
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="aboutus"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              <InfoIcon style={{ color: "black", marginRight: "0.7rem" }} />
              About Us
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              onClick={() => setSidebar(false)}
              offset={-50}
              to="contactus"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              <CallIcon style={{ color: "black", marginRight: "0.7rem" }} />
              Contact Us
            </SidebarLink>
          </SidebarItem>
          <SideMenu>
            <Divider style={{ width: "100%" }} />
            <SidebarItem>
              <SidebarSignLink to="/login" onClick={() => setSidebar(false)}>
                <LoginIcon style={{ color: "black", marginRight: "0.7rem" }} />
                Login
              </SidebarSignLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarSignLink to="/signup" onClick={() => setSidebar(false)}>
                <SignupIcon style={{ color: "black", marginRight: "0.7rem" }} />
                Sign Up
              </SidebarSignLink>
            </SidebarItem>
          </SideMenu>
        </SidebarMenu>
      </div>
    </>
  );
};

export default Navbar;
