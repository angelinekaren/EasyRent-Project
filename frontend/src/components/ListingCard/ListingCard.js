import React, { useState } from "react";
import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { CardCustom } from "./ListingCard.elements";

export default function ListingCard({ listing }) {
  const url = `http://localhost:5000/${listing.housephotos}`;
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
            {listing.city}, {listing.ward}, {listing.district},{" "}
            {listing.postcode}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ color: "#2bc66a" }}
          >
            {listing.listingName}
          </Typography>

          <Typography variant="price" component="h5" gutterBottom>
            {listing.price} /month
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            {listing.address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More</Button>
        </CardActions>
      </CardCustom>
    </>
  );
}
