import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Routes from "./Components/Routes/Routes";
import "./App.scss";

const App = () => {
  return (
    <main className="App">
      {/* if (loading) {
          return <h1>LOADING...</h1>
        }

        if (error) {
          console.log(error)
          return <h1>SOMETHING WENT WRONG...</h1>
        } */}
      <NavBar />
      <Routes />
      <Footer />
    </main>
  );
};

export default App;
