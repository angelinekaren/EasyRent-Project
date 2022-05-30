import React, { useState } from "react";
import ArrowIcon from "@mui/icons-material/ArrowBackIosOutlined";
import forgetImg from "../../images/forget_password.svg";
import { Fade, InputAdornment } from "@mui/material";
import { Container, Button, CssTextField } from "../../GlobalStyles";
import EmailIcon from "@mui/icons-material/AlternateEmailOutlined";
import { authenticationService } from "../../services/authentication.service";

import {
  ForgetSection,
  ForgetRow,
  ForgetColumn,
  ArrowLink,
  ImgWrapper,
  Img,
  ForgetFormCard,
  ForgetFormContainer,
  ForgetHeading,
  MessageSubheading,
  ErrorSubheading,
  Form,
} from "./ForgetPassword.elements";

const ForgetPassword = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const { email } = values;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await authenticationService.forgetPassword(email).then((res) => {
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
    <ForgetSection>
      <Container>
        <ForgetRow>
          <ForgetColumn>
            <ArrowLink to="/login">
              <ArrowIcon style={{ color: "#2bc66a" }} />
            </ArrowLink>
            <ImgWrapper>
              <Img src={forgetImg} alt="Forget Password Image" />
            </ImgWrapper>
          </ForgetColumn>
          <ForgetColumn>
            <ForgetFormContainer>
              <Fade in timeout={2500}>
                <ForgetFormCard>
                  <ForgetHeading>Forget Password</ForgetHeading>
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
                            <EmailIcon
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
                    <Button type="submit" big>
                      Submit
                    </Button>
                  </Form>
                </ForgetFormCard>
              </Fade>
            </ForgetFormContainer>
          </ForgetColumn>
        </ForgetRow>
      </Container>
    </ForgetSection>
  );
};

export default ForgetPassword;
