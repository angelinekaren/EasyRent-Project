import "./App.css";
import GlobalStyle from "./GlobalStyles";
import NavLayout from "./components/NavLayout";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import SignUpRenters from "./components/SignUpRenters/SignUpRenters";
import SignUpOwners from "./components/SignUpOwners/SignUpOwners";
import Home from "./pages/HomePage/Home";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<NavLayout />}>
          {/* Public Routes */}

          <Route path="/" exact element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/renter" element={<SignUpRenters />} />
        <Route path="/signup/owner" element={<SignUpOwners />} />
      </Routes>
    </Router>
  );
}

export default App;
