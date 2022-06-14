import axios from "axios";

async function faceMatch(image1, image2) {
  const data = JSON.stringify({
    images: [image1, image2],
  });

  // console.log(data);

  return await axios.post("/face-match-liveness", data);
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
