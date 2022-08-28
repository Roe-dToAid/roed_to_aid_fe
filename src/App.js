import React, { useState, useEffect } from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import {
  getAllStatePolicies,
  getAllResources,
  getAllMisinformationClinics,
  getAllAuthorizedClinics,
} from "./utils/apiCalls";
import "./App.scss";

const App = () => {
  const [policies, setPolicies] = useState([]);
  const [resources, setResources] = useState([]);
  const [authorizedClinics, setAuthorizedClinics] = useState([]);
  const [misinformationCenters, setMisinformationCenters] = useState([]);

  useEffect(() => {
    getAllStatePolicies().then((data) => setPolicies(data.data));
    getAllResources().then((data) => setResources(data.data));
    getAllAuthorizedClinics().then((data) => setAuthorizedClinics(data.data));
    getAllMisinformationClinics().then((data) =>
      setMisinformationCenters(data.data)
    );
  }, []);

  return (
    <main className="App">
      <NavBar />
      <Footer />
    </main>
  );
};

export default App;
