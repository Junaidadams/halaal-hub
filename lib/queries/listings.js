import apiRequest from "../../lib/apiRequest";

export const fetchListings = async ({ page, limit }) => {
  const res = await apiRequest.get("/listings", {
    params: { page, limit },
  });
  return res.data;
};

export const fetchListingsByLocation = async ({ coords, page, limit }) => {
  const res = await apiRequest.get("/listings/by-location", {
    params: { location: coords, page, limit },
  });
  return res.data;
};
