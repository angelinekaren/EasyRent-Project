import axios from "axios";

async function getAllListings() {
  return await axios.get(`/api/listing/getAllListings`);
}

export const tenantService = {
  getAllListings,
};
