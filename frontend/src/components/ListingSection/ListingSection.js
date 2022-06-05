import React, { Component } from "react";
import { postService } from "../../services/posts.service";

class ListingSection extends Component {
  constructor(props) {
    super(props);
    this.getListing = this.getListing.bind(this);
    this.state = {
      currentListing: {
        listingName: "",
        address: "",
        district: "",
        ward: "",
        city: "",
        postcode: "",
        price: "",
        gender: "",
        size: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getListing(this.props.match.params.id);
  }

  handleChangeListingName(e) {
    const listingName = e.target.value;
    this.setState((prev) {
      return {
        currentListing: {
          ...prev.currentListing,
          listingName: listingName,
        },
      };
    });
  }

  handleChangeAddress(e) {
    const address = e.target.value
    this.setState((prev) => {
    return {
        currentListing: {
            ...prev.currentListing,
            address: address,
        },
        };
    })
  }

  handleChangeDistrict(e) {
    const district = e.target.value
    this.setState((prev) => {
        return {
            currentListing: {
                ...prev.currentListing,
                district: district,
            },
            };
        })
  }

  handleChangeWard(e) {
    const ward = e.target.value
    this.setState((prev) => {
        return {
            currentListing: {
                ...prev.currentListing,
                ward: ward,
            },
            };
        })
  }

  handleChangeCity(e) {
    const city = e.target.value
    this.setState((prev) => {
        return {
            currentListing: {
                ...prev.currentListing,
                city: city,
            },
            };
        })
  }

  handleChangePostcode(e) {
    const postcode = e.target.value
    this.setState((prev) => {
        return {
            currentListing: {
                ...prev.currentListing,
                postcode: postcode,
            },
            };
        })
  }

  handleChangePrice(e) {
    const price = e.target.value
    this.setState((prev) => {
        return {
            currentListing: {
                ...prev.currentListing,
                price: price,
            },
            };
        })
  }

  handleChangeGender(e) {
    const gender = e.target.value
    this.setState((prev) => {
        return {
            currentListing: {
                ...prev.currentListing,
                gender: gender,
            },
            };
        })
  }

  handleChangeSize(e) {
    const size = e.target.value
    this.setState((prev) => {
        return {
            currentListing: {
                ...prev.currentListing,
                size: size,
            },
            };
        })
  }


  getListing() {
    postService
      .getListing(id)
      .then((res) => {
        this.setState({
          currentListing: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
      return (
          <>
            
          </>
      )
  }
}
