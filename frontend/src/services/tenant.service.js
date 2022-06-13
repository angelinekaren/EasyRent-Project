import axios from "axios";

async function getAllListings() {
  return await axios.get(
    `https://easyrent-node-backend.herokuapp.com/api/listing/getAllListings`
  );
}

export const tenantService = {
  getAllListings,
};
