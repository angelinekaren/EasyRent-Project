import "./App.css";
import GlobalStyle from "./GlobalStyles";
import NavLayout from "./components/NavLayout";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import SignUpRenters from "./components/SignUpRenters/SignUpRenters";
import SignUpOwners from "./components/SignUpOwners/SignUpOwners";
import Home from "./pages/HomePage/Home";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import ContactUs from "./pages/ContactUsPage/ContactUs";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import AccountPage from "./pages/Account/AccountPage";
import AddProperty from "./components/AddProperty/AddProperty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import AddProperties from "./pages/AddProperties/AddProperties";
import Verifying from "./components/VerifyLandlordSection/Verifying";
import { PrivateRoute } from "./components/PrivateRoute";
import { FormAddProperty } from "./components";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route element={<NavLayout />}>
            {/* Public Routes */}
            <Route path="/" exact element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/verify" element={<Verifying />} />
            <Route path="/your-properties" element={<AddProperties />} />
          </Route>
          <Route path="/add-properties" element={<FormAddProperty />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/renter" element={<SignUpRenters />} />
          <Route path="/signup/owner" element={<SignUpOwners />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/account/changePassword" element={<ChangePassword />} />
          <Route
            path="/resetPassword/:userId/:token"
            element={<ResetPassword />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
