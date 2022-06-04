import React from "react";
import { Button } from "@mui/material";
import SearchBar from "../SearchBar";
import { Container } from "../../GlobalStyles";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { faceMatchLandlord } from "../../actions/post.actions";
import { useDispatch } from "react-redux";

import { Section, Wrapper } from "./AddProperty.elements";

const AddProperty = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <SearchBar />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default AddProperty;
