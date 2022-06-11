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
import {
  Grid,
  FormControl,
  InputLabel,
  NativeSelectm,
  MenuItem,
  Select,
} from "@mui/material";

class TenantExploreSection extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchQuery = this.onChangeSearchQuery.bind(this);
    this.searchFilterGender = this.searchFilterGender.bind(this);
    this.state = {
      searchQuery: "",
      condition: ["listingName", "city", "address", "ward", "district"],
      filterGender: ["all"],
    };
  }

  componentDidMount() {
    this.props.getAllListingsTenants();
  }

  onChangeSearchQuery(e) {
    const searchQuery = e.target.value;
    this.setState({
      searchQuery: searchQuery,
    });
  }

  searchFilterGender(e) {
    const filterGender = e.target.value;
    this.setState({
      filterGender: filterGender,
    });
  }

  render() {
    const { tenants } = this.props;
    const { listOfListings } = tenants;

    const { searchQuery, condition, filterGender } = this.state;

    console.log(tenants);

    return (
      <>
        <Section>
          <Container>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <Paper
                component="form"
                sx={{
                  width: "60%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search your properties"
                  inputProps={{ "aria-label": "search your properties" }}
                  value={searchQuery}
                  onChange={this.onChangeSearchQuery}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
              <FormControl fullwidth sx={{ marginLeft: "auto " }}>
                <Select defaultValue="all">
                  <MenuItem value="all">Filter by Gender</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </div>
            <GridCustom container alignItems="stretch" spacing={3}>
              {listOfListings?.result &&
                listOfListings.result
                  .filter((item) =>
                    condition.some((newItem) => {
                      return (
                        item[newItem]
                          .toString()
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) > -1
                      );
                    })
                  )
                  .map((tenant, index) => (
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
