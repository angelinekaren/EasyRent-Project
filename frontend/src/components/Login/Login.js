import React, { useState } from "react";
import { Fade, InputAdornment } from "@mui/material";
import { Container, Button, CssTextField } from "../../GlobalStyles";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockIcon from "@mui/icons-material/HttpsOutlined";
import loginImg from "../../images/login_image.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowIcon from "@mui/icons-material/ArrowBackIosOutlined";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

import {
  LoginSection,
  LoginRow,
  ImgWrapper,
  Img,
  LoginColumn,
  LoginFormContainer,
  LoginFormCard,
  LoginHeading,
  ForgetPass,
  LinkWrapper,
  SignUpLink,
  TextWrapper,
  ArrowLink,
  Form,
  ErrorSubheading,
  MessageSubheading,
} from "./Login.elements";

import { authenticationService } from "../../services/authentication.service";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { email, password } = values;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await authenticationService.login(email, password).then((res) => {
        navigate("/");
        //   console.log(res.data);
        // setMessage(res.message);
        // console.log(res.data.message);
        // console.log(res.data);
        // return res.data;
      });
    } catch (err) {
      // Error message
      if (
        err.response.status === 400 ||
        err.response.status === 401 ||
        err.response.status === 404 ||
        err.response.status === 500
      ) {
        setError(err.response.data.message);
      } else {
        return Promise.reject(err);
      }
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <LoginSection>
      <Container>
        <LoginRow>
          <LoginColumn>
            <ArrowLink to="/">
              <ArrowIcon style={{ color: "#2bc66a" }} />
            </ArrowLink>
            <ImgWrapper>
              <Img src={loginImg} alt="Login Image" />
            </ImgWrapper>
          </LoginColumn>
          <LoginColumn>
            <LoginFormContainer>
              <Fade in timeout={2500}>
                <LoginFormCard>
                  <LoginHeading>Log In</LoginHeading>
                  {message && <MessageSubheading>{message}</MessageSubheading>}
                  {error && <ErrorSubheading>{error}</ErrorSubheading>}
                  <Form onSubmit={handleSubmit}>
                    <CssTextField
                      className="email-input"
                      required
                      fullWidth
                      id="email"
                      label="Enter email"
                      variant="outlined"
                      value={values.email}
                      onChange={handleChange("email")}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon
                              fontSize="small"
                              sx={{ color: "#2bc66a" }}
                            />
                          </InputAdornment>
                        ),
                        style: {
                          marginBottom: "1rem",
                        },
                      }}
                    />
                    <CssTextField
                      className="pass-input"
                      required
                      fullWidth
                      id="password"
                      label="Enter password"
                      variant="outlined"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon
                              fontSize="small"
                              sx={{ color: "#2bc66a" }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleShowPassword}
                              onMouseDown={handleMouseDown}
                              sx={{ marginRight: "0.5px" }}
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextWrapper>
                      <ForgetPass to="/">Forget Password?</ForgetPass>
                    </TextWrapper>
                    <Button type="submit" big>
                      Submit
                    </Button>
                  </Form>
                  <LinkWrapper>
                    Don't have an account?
                    <SignUpLink to="/signup">Sign Up</SignUpLink>
                  </LinkWrapper>
                </LoginFormCard>
              </Fade>
            </LoginFormContainer>
          </LoginColumn>
        </LoginRow>
      </Container>
    </LoginSection>
  );
};

export default Login;
