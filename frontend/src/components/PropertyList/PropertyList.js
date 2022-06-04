import React, { Component } from "react";
import { connect } from "react-redux";
import { getListingsByLandlord } from "../../actions/post.actions";

class PropertyList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getListingsByLandlord();
  }

  render() {
    const { listings } = this.props;
    console.log(listings.result);
    return (
      <>
        <p>Listings List</p>
        <ul className="list-group">
          <p> hai</p>
          {listings.result &&
            listings.result.map((listing, index) => (
              <h1>{listing.listingName}</h1>
            ))}
        </ul>
      </>
    );
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
