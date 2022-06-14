import axios from "axios";

async function faceMatch(image1, image2) {
  const data = JSON.stringify({
    images: [image1, image2],
  });

  return await axios.post("/face-match-liveness", data, {
    headers: {
      Authorization: `NODEFLUX-HMAC-SHA256 Credential=${process.env.REACT_APP_NODEFLUX_ACCESS_KEY}/${process.env.REACT_APP_NODEFLUX_DATE}/nodeflux.api.v1beta1.ImageAnalytic/StreamImageAnalytic, SignedHeaders=x-nodeflux-timestamp, Signature=${process.env.REACT_APP_NODEFLUX_TOKEN}`,
      "x-nodeflux-timestamp": `${process.env.REACT_APP_X_NODEFLUX_TIMESTAMP}`,
      "Content-Type": "application/json",
    },
  });
}

async function getListing(id) {
  return await axios.get(
    `https://easyrent-node-backend.herokuapp.com/api/listing/${id}`
  );
}

async function updateListing(id, updatedData) {
  return await axios.put(
    `https://easyrent-node-backend.herokuapp.com/api/listing/${id}`,
    updatedData
  );
}

export const postService = {
  faceMatch,
  getListing,
  updateListing,
};
