import apiRequest from "../../../lib/apiRequest";

export const savedListingsUpdater = async (currentUser, savedListings) => {
  if (!currentUser || !currentUser.id) return;

  try {
    await apiRequest.put(`/users/${currentUser.id}/saved-listings`, {
      savedListings,
    });
    console.log("Saved listings updated successfully.");
  } catch (error) {
    console.error("Error updating saved listings:", error);
  }
};
