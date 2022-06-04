import React, { useEffect, useState } from "react";
import { Button, Box, Fade } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Container } from "../../GlobalStyles";
import Loading from "../Loading";
import {
  faceMatchLandlord,
  storeVerifiedData,
} from "../../actions/post.actions";
import { Alert } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import verifyImg from "../../images/verified_page.svg";

import {
  Section,
  VerifyingRow,
  VerifyingColumn,
  CardWrapper,
  Title,
  FileCardDetail,
  FileUploadCard,
  Wrapper,
  Subtitle,
  Card,
  CardDetail,
  CardTextField,
  ImgWrapper,
  Img,
  ArrowLink,
} from "./Verify.elements";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Verifying = () => {
  const dispatch = useDispatch();
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [KTPImage, setKTPImage] = useState("");
  const [selfieImage, setSelfieImage] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const convertToBase64Url = (file) => {
    return new Promise((resolve, reject) => {
      const fileRead = new FileReader();

      // Convert image to base64 string
      fileRead.readAsDataURL(file);

      // loading the file ...
      fileRead.onload = () => {
        resolve(fileRead.result);
        // console.log(fileRead.result);
      };

      // if an error occurs while loading the file
      fileRead.onerror = (err) => {
        reject(err);
        // console.log(err);
      };
    });
  };

  const handleConvertKTP = async (e) => {
    const file = e.target.files[0];

    setKTPImage(file);

    const base64URL_ktp = await convertToBase64Url(file);

    setImage1(base64URL_ktp);
  };

  const handleConvertPhoto = async (e) => {
    const file = e.target.files[0];

    setSelfieImage(file);

    const base64URL_photo = await convertToBase64Url(file);
    setImage2(base64URL_photo);
  };

  const faceMatch = useSelector((state) => state.faceMatch);
  const { message } = useSelector((state) => state.message);
  const userVerifiedStatus = useSelector((state) => state.userVerifiedStatus);
  const { verifyingLoading } = userVerifiedStatus;

  const { loading, faceMatched } = faceMatch;

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch(ocrKTPLandlord(image1));
    dispatch(faceMatchLandlord(image1, image2));
  };

  const handleStoringData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("ktp_image", KTPImage);
    formData.append("selfie_image", selfieImage);

    dispatch(storeVerifiedData(formData)).then(() => {
      navigate("/your-properties");
      window.location.reload();
    });
  };

  return (
    <>
      <Section>
        <Container>
          <Fade in timeout={2500}>
            <VerifyingRow>
              <VerifyingColumn>
                <CardWrapper>
                  <Title>Upload your KTP and photo</Title>
                  {loading && <Loading />}
                  <FileUploadCard>
                    {message && (
                      <Collapse in={open}>
                        <Alert
                          severity="info"
                          sx={{
                            marginTop: "0.2rem",
                            marginBottom: "0.8rem",
                          }}
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpen(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                        >
                          {message}
                        </Alert>
                      </Collapse>
                    )}
                    <FileCardDetail>
                      <Wrapper>
                        <Subtitle>KTP Section</Subtitle>
                        <Card>
                          <CardDetail>
                            <input
                              type="file"
                              name="ktp_image"
                              accept=".jpeg"
                              onChange={(e) => {
                                handleConvertKTP(e);
                              }}
                            />
                          </CardDetail>
                        </Card>
                      </Wrapper>
                      <Wrapper>
                        <Subtitle>Photo Section</Subtitle>
                        <Card>
                          <CardDetail>
                            <input
                              type="file"
                              name="selfie_image"
                              accept=".jpeg"
                              onChange={(e) => {
                                handleConvertPhoto(e);
                              }}
                            />
                          </CardDetail>
                        </Card>
                      </Wrapper>
                      <Button
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{
                          margin: "0 30px",
                          backgroundColor: "#2bc66a",
                          "&:hover": {
                            backgroundColor: "green",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </FileCardDetail>
                  </FileUploadCard>
                </CardWrapper>
              </VerifyingColumn>
              <VerifyingColumn>
                <ImgWrapper>
                  <Img src={verifyImg} alt="Picture" />
                </ImgWrapper>
                {verifyingLoading && <Loading />}
                <Button
                  disabled={!faceMatched}
                  onClick={handleStoringData}
                  variant="outlined"
                  sx={{
                    margin: "0 30px",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: "green",
                      color: "white",
                    },
                  }}
                >
                  Go next
                </Button>
              </VerifyingColumn>
            </VerifyingRow>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default Verifying;
