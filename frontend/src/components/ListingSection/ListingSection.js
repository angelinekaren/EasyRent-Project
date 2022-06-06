import React, { Component, useEffect, useState, setState } from "react";
import {
  getIndividualListing,
  updateListing,
} from "../../actions/post.actions";
import { useNavigate, useParams } from "react-router-dom";

import ArrowIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Fade, Button as btn } from "@mui/material";
import { Container, Button, TextFieldCustom } from "../../GlobalStyles";
import { Alert } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import {
  RentersSection,
  RentersHeading,
  RentersRow,
  RentersColumn,
  ArrowLink,
  ImgWrapper,
  Img,
  RentersFormCard,
  Form,
  RentersFormContainer,
  GenderInputWrapper,
  GenderHeading,
  CustomToggle,
} from "../SignUpRenters/SignUpRenters.elements";
import { useDispatch, useSelector } from "react-redux";

const ListingSection = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { result } = useSelector((state) => state.listings);

  console.log(result);
  useEffect(() => {
    dispatch(getIndividualListing(id));
  }, []);

  const [listingName, setListingName] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [housePhoto, setHousePhoto] = useState("");
  const [houseCertif, setHouseCertif] = useState("");
  const [facilities, setFacilities] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (result.result) {
      setListingName(result.result.listingName);
      setAddress(result.result.address);
      setDistrict(result.result.district);
      setWard(result.result.ward);
      setCity(result.result.city);
      setPostcode(result.result.postcode);
      setPrice(result.result.price);
      setSize(result.result.size);
      setGender(result.result.gender);
      setHousePhoto(result.result.housephotos);
      setFacilities(result.result.facilities);
      setHouseCertif(result.result.housecertif);
    }
  }, [result.result]);

  const handleHousePhoto = async (e) => {
    const file = e.target.files[0];
    setHousePhoto(file);
  };

  const handleHouseCertif = async (e) => {
    const file = e.target.files[0];
    setHouseCertif(file);
  };

  const options = [
    { label: "WI-FI", value: "wifi" },
    { label: "Hot Water", value: "hot_water" },
    { label: "Private Bath", value: "private_bath" },
    { label: "Bed", value: "bed" },
    { label: "Car Parking", value: "car_parking" },
    { label: "CCTV", value: "cctv" },
  ];

  const handleCheck = (event) => {
    var checkedList = [...facilities];
    // console.log(checkedList);
    if (event.target.checked) {
      checkedList = [...facilities, event.target.value];
    } else {
      checkedList.splice(facilities.indexOf(event.target.value), 1);
    }
    setFacilities(checkedList);
  };

  var isChecked = (item) => {
    facilities.includes(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("listingName", listingName);
    formData.append("address", address);
    formData.append("district", district);
    formData.append("ward", ward);
    formData.append("city", city);
    formData.append("postcode", postcode);
    formData.append("price", price);
    formData.append("gender", gender);
    formData.append("size", size);
    formData.append("facilities", facilities);
    formData.append("housephotos", housePhoto);
    formData.append("housecertif", houseCertif);

    dispatch(updateListing(id, formData)).then(() => {
      navigate("/your-properties");
      window.location.reload();
    });
  };

  const { message } = useSelector((state) => state.message);

  return (
    <>
      <RentersSection>
        <Container>
          <RentersRow>
            <RentersColumn>
              <RentersFormContainer>
                <Fade in timeout={2500}>
                  <RentersFormCard id="add-property-form">
                    <RentersHeading>Edit Property</RentersHeading>
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
                    <Form onSubmit={handleSubmit}>
                      <TextFieldCustom
                        className="listingName-input"
                        required
                        fullWidth
                        value={listingName || ""}
                        onChange={(e) => setListingName(e.target.value)}
                        id="listingName"
                        label="Listing name"
                        variant="outlined"
                        size="small"
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextFieldCustom
                        className="address-input"
                        required
                        fullWidth
                        size="small"
                        value={address || ""}
                        onChange={(e) => setAddress(e.target.value)}
                        id="address"
                        label="Address"
                        variant="outlined"
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextFieldCustom
                        className="district-input"
                        required
                        fullWidth
                        size="small"
                        id="district"
                        label="District"
                        variant="outlined"
                        value={district || ""}
                        onChange={(e) => setDistrict(e.target.value)}
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextFieldCustom
                        className="ward-input"
                        required
                        fullWidth
                        id="ward"
                        size="small"
                        label="Ward"
                        variant="outlined"
                        value={ward || ""}
                        onChange={(e) => setWard(e.target.value)}
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextFieldCustom
                        className="city-input"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        size="small"
                        variant="outlined"
                        value={city || ""}
                        onChange={(e) => setCity(e.target.value)}
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextFieldCustom
                        className="postcode-input"
                        required
                        fullWidth
                        id="postcode"
                        label="Postcode"
                        size="small"
                        variant="outlined"
                        value={postcode || ""}
                        onChange={(e) => setPostcode(e.target.value)}
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextFieldCustom
                        className="price-input"
                        required
                        fullWidth
                        id="price"
                        label="Price"
                        size="small"
                        variant="outlined"
                        value={price || ""}
                        onChange={(e) => setPrice(e.target.value)}
                        sx={{ marginTop: "1.2rem" }}
                      />
                      <TextFieldCustom
                        className="size-input"
                        required
                        fullWidth
                        id="size"
                        label="Size"
                        size="small"
                        variant="outlined"
                        value={size || ""}
                        onChange={(e) => setSize(e.target.value)}
                        sx={{ marginTop: "1.2rem", marginBottom: "1rem" }}
                      />
                      <div>
                        <GenderInputWrapper>
                          <GenderHeading>Facilities</GenderHeading>
                        </GenderInputWrapper>
                        {options.map(({ label, value }, index) => {
                          return (
                            <FormControlLabel
                              className="checkbox-group-checkbox-label"
                              control={
                                <Checkbox
                                  key={index + label}
                                  type="checkbox"
                                  value={value || ""}
                                  checked={isChecked(value)}
                                  onChange={handleCheck}
                                  sx={{
                                    color: "#2bc66a",
                                    "&.Mui-checked": {
                                      color: "#2bc66a",
                                    },
                                  }}
                                />
                              }
                              label={label}
                            />
                          );
                        })}
                      </div>
                      <GenderInputWrapper>
                        <GenderHeading>Gender</GenderHeading>
                        <ToggleButtonGroup
                          size="small"
                          value={gender || ""}
                          onChange={(e) => setGender(e.target.value)}
                          exclusive
                        >
                          <CustomToggle value="male">Male</CustomToggle>
                          <CustomToggle value="female">Female</CustomToggle>
                          <CustomToggle value="all">All</CustomToggle>
                        </ToggleButtonGroup>
                      </GenderInputWrapper>
                      <GenderInputWrapper style={{ marginTop: "2rem" }}>
                        <GenderHeading>Images</GenderHeading>
                        <input
                          type="file"
                          name="housephotos"
                          accept=".png"
                          onChange={(e) => {
                            handleHousePhoto(e);
                          }}
                        />
                      </GenderInputWrapper>
                      <GenderInputWrapper style={{ marginTop: "2rem" }}>
                        <GenderHeading>Certification</GenderHeading>
                        <input
                          type="file"
                          name="housecertif"
                          accept=".png"
                          onChange={(e) => {
                            handleHouseCertif(e);
                          }}
                        />
                      </GenderInputWrapper>
                      <Button
                        type="submit"
                        style={{
                          padding: "12px 120px",
                          marginTop: "1.5rem",
                          marginBottom: "3rem",
                        }}
                      >
                        Submit
                      </Button>
                    </Form>
                  </RentersFormCard>
                </Fade>
              </RentersFormContainer>
            </RentersColumn>
          </RentersRow>
        </Container>
      </RentersSection>
    </>
  );
};

export default ListingSection;
