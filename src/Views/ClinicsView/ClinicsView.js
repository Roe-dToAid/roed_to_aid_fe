import React from "react";
import { useEffect, useState } from "react";
import {
  getAllResources,
  getAllMisinformationClinics,
  getAllAuthorizedClinics,
} from "../../utils/apiCalls";

const ClinicsView = () => {
  const [authorizedClinics, setAuthorizedClinics] = useState([]);
  const [misinformationCenters, setMisinformationCenters] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getAllResources().then((data) => setResources(data.data));
    getAllAuthorizedClinics().then((data) => setAuthorizedClinics(data.data));
    getAllMisinformationClinics().then((data) =>
      setMisinformationCenters(data.data)
    );
  }, []);
  return <h1>clinics</h1>;
};

export default ClinicsView;
