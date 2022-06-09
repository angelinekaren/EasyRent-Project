import React, { useEffect, Component } from "react";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { getAllListingsTenants } from "../../actions/tenants.actions";
import TenantListingCard from "../TenantListingCard/TenantListingCard";
import { GridCustom } from "../PropertyList/PropertyList.elements";
import { Section } from "./TenantExploreSection.elements";
import { Container } from "../../GlobalStyles";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

class TenantExploreSection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllListingsTenants();
  }

  render() {
    const { tenants } = this.props;
    const { listOfListings } = tenants;

    console.log(tenants);

    return (
      <>
        <Section>
          <Container>
            <Paper
              component="form"
              sx={{
                padding: "2px 0",
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search your properties"
                inputProps={{ "aria-label": "search your properties" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <GridCustom container alignItems="stretch" spacing={3}>
              {listOfListings.result &&
                listOfListings.result.map((tenant, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <TenantListingCard tenant={tenant} />
                  </Grid>
                ))}
            </GridCustom>
          </Container>
        </Section>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    tenants: state.tenants,
  };
}

export default connect(mapStateToProps, {
  getAllListingsTenants,
})(TenantExploreSection);
