import React, { useState, useEffect } from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";
import "./App.scss";

// const App = () => {
//   const [compliment, setCompliment] = useState("");
//   const [advice, setAdvice] = useState("");
//   const [favoriteCompliment, setFavoriteCompliment] = useLocalStorage(
//     "complimentFavorite",
//     []
//   );
//   const [favoriteAdvice, setFavoriteAdvice] = useLocalStorage(
//     "adviceFavorite",
//     []
//   );
//   const [error, setError] = useState();

//   useEffect(() => {
//     getNewCall("compliment");
//     getNewCall("advice");
//   }, []);
const App = () => {
  const [policies, setPolicies] = useState([]);
  const [resources, setResources] = useState([]);
  const [authorizedClinics, setAuthorizedClinics] = useState([]);
  const [misinformationCenters, setMisinformationCenters] = useState([]);
  const [error, setError] = useState();

  return (
    <main className="App">
      <NavBar />
      <Footer />
    </main>
  );
};

export default App;
