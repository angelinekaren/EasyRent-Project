import React, { useState } from "react";
import { Fade, InputAdornment } from "@mui/material";
import { Container, Button, CssTextField } from "../../GlobalStyles";
import resetImg from "../../images/reset_password.svg";
import LockIcon from "@mui/icons-material/HttpsOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useParams } from "react-router-dom";
import { authenticationService } from "../../services/authentication.service";

import {
  ResetSection,
  ResetRow,
  ResetColumn,
  ImgWrapper,
  Img,
  ResetFormCard,
  ResetFormContainer,
  ResetHeading,
  MessageSubheading,
  ErrorSubheading,
  Form,
} from "./ResetPassword.elements";

const ResetPassword = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const { password } = values;
  let { userId, token } = useParams();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log(userId);
      console.log(token);
      await authenticationService
        .resetPassword(userId, token, password)
        .then((res) => {
          setMessage(res.data.message);
          setTimeout(() => {
            setMessage("");
          }, 3000);
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
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  };

  return (
    <ResetSection>
      <Container>
        <ResetRow>
          <ResetColumn>
            <ImgWrapper>
              <Img src={resetImg} alt="Reset Password Image" />
            </ImgWrapper>
          </ResetColumn>
          <ResetColumn>
            <ResetFormContainer>
              <Fade in timeout={2500}>
                <ResetFormCard>
                  <ResetHeading>Reset your password</ResetHeading>
                  {message && <MessageSubheading>{message}</MessageSubheading>}
                  {error && <ErrorSubheading>{error}</ErrorSubheading>}
                  <Form onSubmit={handleSubmit}>
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
                        style: {
                          marginBottom: "1rem",
                        },
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
                    <Button type="submit" big>
                      Submit
                    </Button>
                  </Form>
                </ResetFormCard>
              </Fade>
            </ResetFormContainer>
          </ResetColumn>
        </ResetRow>
      </Container>
    </ResetSection>
  );
};

export default ResetPassword;
