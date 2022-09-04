import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Routes from "./Components/Routes/Routes";
import "./App.scss";

const App = () => {
  return (
    <main className="App">
      <NavBar />
      <Routes />
      <Footer />
    </main>
  );
};

export default App;
