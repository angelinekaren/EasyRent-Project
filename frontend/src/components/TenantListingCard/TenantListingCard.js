import React, { useEffect, useState } from "react";
import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  listingFavorites,
  getAllFavorites,
  deleteFavorites,
} from "../../actions/tenants.actions";

import { CardCustom } from "../ListingCard/ListingCard.elements";
import axios from "axios";

export default function TenantListingCard({ tenant }) {
  const dispatch = useDispatch();

  const url = `http://localhost:5000/${tenant.housephotos}`;

  const tenants = useSelector((state) => state.tenants);
  const { favorites } = tenants;
  console.log(favorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSetFavorites = (id) => {
    dispatch(listingFavorites(id));
  };

  const handleDeleteFavorites = (id) => {
    dispatch(deleteFavorites(id));
  };

  const exists = (tenant) => {
    if (
      favorites &&
      favorites.filter((item) => item.id === tenant._id).length > 0
    ) {
      return true;
    }
    return false;
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <CardCustom>
        <CardMedia
          component="img"
          image={url}
          sx={{ height: "100%", width: "100%" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {tenant.city}, {tenant.ward}, {tenant.district}, {tenant.postcode}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ color: "#2bc66a" }}
          >
            {tenant.listingName}
          </Typography>

          <Typography variant="price" component="h5" gutterBottom>
            {tenant.price} /month
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            {tenant.address}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link
            to={`/explore/${tenant._id}`}
            style={{ textDecoration: "none" }}
          >
            <Button size="small">See More</Button>
          </Link>

          <IconButton
            onClick={() =>
              exists(tenant)
                ? handleDeleteFavorites(tenant._id)
                : handleSetFavorites(tenant._id)
            }
            onMouseDown={handleMouseDown}
            sx={{ marginLeft: "auto", color: "#ffb443" }}
          >
            {exists(tenant) ? <StarIcon /> : <StarOutlineIcon />}
          </IconButton>
        </CardActions>
      </CardCustom>
    </>
  );
}
