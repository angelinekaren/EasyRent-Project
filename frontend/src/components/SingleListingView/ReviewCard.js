import React from "react";
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  Rating,
  Divider,
} from "@mui/material";

export default function ReviewCard({ review }) {
  return (
    <>
      <Paper style={{ padding: "40px 20px", marginTop: 20 }}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
            <Avatar />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth key={review._id}>
            <Typography>{review.fullname}</Typography>
            <Rating value={review.rating} />
            <Typography>{review.createdAt.substring(0, 10)}</Typography>
            <Typography>{review.reviewsComment}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
