import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Routes from "./Components/Routes/Routes";
import "./App.scss";
import { useQuery, gql } from '@apollo/client'

const GET_STATES = gql`
  query {
    states {
      name 
      abbreviation
      id
      misinformationCenters {
        name
      }
    }
  }
`;

const App = () => {
  let { data, loading, error } = useQuery(GET_STATES)
  if (loading) console.log('Loading...');
  if (error) console.log("error!", error.message)
  if (data) console.log(data)

//   var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var graphql = JSON.stringify({
//   query: "query {\n states {\n     name\n     misinformationCenters {\n         name\n     }\n }\n}",
//   variables: {}
// })
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: graphql,
//   redirect: 'follow'
// };

// fetch("https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
  
  return (
    <main className="App">
      <NavBar />
      <Routes />
      <Footer />
    </main>
  );
};

export default App;
