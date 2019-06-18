import React, { Component } from 'react';
import './App.css';
import Builds from "./components/Builds";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Builds />
      </ApolloProvider>
    );
  }
}

export default App;
