export const getAllStatePolicies = async () => {
  const URL = "https://roed-to-aide-be.herokuapp.com/api/v1/states";
  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

export const getAllAuthorizedClinics = async () => {
  const URL = "https://roed-to-aide-be.herokuapp.com/api/v1/authorized_clinics";
  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

export const getAllMisinformationClinics = async () => {
  const URL =
    "https://roed-to-aide-be.herokuapp.com/api/v1/misinformation_centers";
  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};

export const getAllResources = async () => {
  const URL = "https://roed-to-aide-be.herokuapp.com/api/v1/resources";
  const response = await fetch(URL, { method: "GET" });
  return await response.json();
};
