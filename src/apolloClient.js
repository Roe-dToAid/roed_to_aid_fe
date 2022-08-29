import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881",
});

export default client