import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import addImg from "../../images/form_add.svg";
import ArrowIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Fade } from "@mui/material";
import { Container, Button, TextFieldCustom } from "../../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { addListing } from "../../actions/post.actions";
import { Alert } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
import { useNavigate } from "react-router-dom";

const FormAddProperty = () => {
  const [values, setValues] = useState({
    listingName: "",
    address: "",
    district: "",
    ward: "",
    city: "",
    postcode: "",
    price: "",
    size: "",
    gender: "male",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [facilities, setFacilities] = useState([]);
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

  const {
    listingName,
    address,
    district,
    ward,
    city,
    postcode,
    price,
    size,
    gender,
  } = values;

  const [housePhoto, setHousePhoto] = useState("");
  const [houseCertif, setHouseCertif] = useState("");

  const handleHousePhoto = async (e) => {
    const file = e.target.files[0];

    setHousePhoto(file);
  };

  const handleHouseCertif = async (e) => {
    const file = e.target.files[0];

    setHouseCertif(file);
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

    dispatch(addListing(formData));
  };

  const { message } = useSelector((state) => state.message);
  return (
    <RentersSection>
      <Container>
        <RentersRow>
          <ArrowLink to="/your-properties">
            <ArrowIcon style={{ color: "#2bc66a" }} />
          </ArrowLink>
          <RentersColumn>
            <ImgWrapper>
              <Img src={addImg} alt="Add Property Image" />
            </ImgWrapper>
          </RentersColumn>
          <RentersColumn>
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
            <RentersFormContainer>
              <Fade in timeout={2500}>
                <RentersFormCard id="add-property-form">
                  <RentersHeading>Add Property</RentersHeading>
                  <Form onSubmit={handleSubmit}>
                    <TextFieldCustom
                      className="listingName-input"
                      required
                      fullWidth
                      value={values.listingName}
                      onChange={handleChange("listingName")}
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
                      value={values.address}
                      onChange={handleChange("address")}
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
                      value={values.district}
                      onChange={handleChange("district")}
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
                      value={values.ward}
                      onChange={handleChange("ward")}
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
                      value={values.city}
                      onChange={handleChange("city")}
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
                      value={values.postcode}
                      onChange={handleChange("postcode")}
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
                      value={values.price}
                      onChange={handleChange("price")}
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
                      value={values.size}
                      onChange={handleChange("size")}
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
                                value={value}
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
                        value={values.gender}
                        onChange={handleChange("gender")}
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
  );
};

export default FormAddProperty;
