import axios from "axios";

async function faceMatch(image1, image2) {
  const data = JSON.stringify({
    images: [image1, image2],
  });

  const config = {
    headers: {
      Authorization: `NODEFLUX-HMAC-SHA256 Credential=${process.env.NODEFLUX_ACCESS_KEY}/${process.env.NODEFLUX_DATE}/nodeflux.api.v1beta1.ImageAnalytic/StreamImageAnalytic, SignedHeaders=x-nodeflux-timestamp, Signature=${process.env.NODEFLUX_TOKEN}`,
      "x-nodeflux-timestamp": `${process.env.X_NODEFLUX_TIMESTAMP}`,
      "Content-Type": "application/json",
    },
  };
  // console.log(data);

  return await axios.post(
    "https://easyrent-app-project-guslv527m-angelinekaren.vercel.app/https://api.cloud.nodeflux.io/v1/analytics/face-match-liveness",
    data,
    config
  );
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
