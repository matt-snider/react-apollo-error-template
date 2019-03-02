import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  render() {
    const { data: { loading, error, localStateMessage, people } } = this.props;
    return (
      <main>
        <header>
          <h1>Apollo Client Error Template</h1>
        </header>
        {loading ? (
          <p>Loading…</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div>
            <p>MyQuery result: {localStateMessage} </p>
          </div>
        )}
      </main>
    );
  }
}

export default graphql(
  gql`
    query MyQuery {
      ...RootQueryFragment
    }

    fragment RootQueryFragment on Query {
      localStateMessage @client
    }
  `
)(App);
