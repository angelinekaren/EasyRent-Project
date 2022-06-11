import React, { Component } from "react";
import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";
import {
  GridCustom,
  Headingg,
  Subheading,
} from "../PropertyList/PropertyList.elements";
import { Section } from "../TenantExploreSection/TenantExploreSection.elements";
import { Container } from "../../GlobalStyles";
import { getAllFavorites } from "../../actions/tenants.actions";
import { Grid } from "@mui/material";

class FavoriteList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllFavorites();
  }

  render() {
    const { tenants } = this.props;
    console.log(tenants);

    if (!tenants.fav?.length) {
      return (
        <>
          <Section>
            <Container>
              <Headingg>No favorites added yet!</Headingg>
            </Container>
          </Section>
        </>
      );
    } else {
      return (
        <>
          <Section>
            <Container>
              <Headingg>Favorites List</Headingg>
              <Subheading>
                Results {tenants?.fav.length} favorites found
              </Subheading>
              <GridCustom container alignItems="stretch" spacing={3}>
                {tenants?.fav &&
                  tenants.fav.map((tenant, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                      <FavoriteCard tenant={tenant} />
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
    tenants: state.tenants,
  };
};

export default connect(mapStateToProps, {
  getAllFavorites,
})(FavoriteList);
