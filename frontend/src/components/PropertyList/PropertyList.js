import { Grid } from "@mui/material";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { getListingsByLandlord } from "../../actions/post.actions";
import ListingCard from "../ListingCard/ListingCard";
import { GridCustom, Section, Heading } from "./PropertyList.elements";
import { Container } from "../../GlobalStyles";

class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.handleChangeSearchListing = this.handleChangeSearchListing.bind(this);
    this.state = {
      searchListing: "",
    };
  }

  componentDidMount() {
    this.props.getListingsByLandlord();
  }

  handleChangeSearchListing(e) {
    const searchListing = e.target.value;
    this.setState({
      searchListing: searchListing,
    });
  }

  render() {
    const { searchListing } = this.state;
    const { listings } = this.props;

    if (listings.length === 0) {
      return (
        <>
          <Section>
            <Container>
              <Heading>No properties added yet!</Heading>
            </Container>
          </Section>
        </>
      );
    } else {
      return (
        <>
          <Section>
            <Container>
              <Heading>Listings List</Heading>
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
                  value={searchListing}
                  onChange={this.handleChangeSearchListing}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
              <GridCustom container alignItems="stretch" spacing={3}>
                {listings.result &&
                  listings.result
                    .filter((list) =>
                      list.listingName.toLowerCase().includes(searchListing)
                    )
                    .map((listing, index) => (
                      <Grid key={index} item xs={12} sm={6} md={4}>
                        <ListingCard listing={listing} />
                      </Grid>
                    ))}
              </GridCustom>
            </Container>
          </Section>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
  };
};

export default connect(mapStateToProps, {
  getListingsByLandlord,
})(PropertyList);
