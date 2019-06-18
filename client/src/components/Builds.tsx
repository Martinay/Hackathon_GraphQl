import React, { Component } from 'react';
import Build from './Build'
import BuildSchema from '../schemas/Build'
import { List } from 'semantic-ui-react'
import { Query } from 'react-apollo';
import { gql } from "apollo-boost";


class Builds extends Component<any, any> {

  render() {
    const query = gql`
    {
      builds {
        id
        buildName
        requestedFor
        result
        checked
      }
    }
  `;
    return (
      <List selection verticalAlign='middle'>
        <Query<{ builds: BuildSchema[] }> query={query} >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{error.message}</p>;
            if (data === undefined)
              return <div>undefinded</div>

            return data.builds.map(x => (
              <Build id={x.id} buildName={x.buildName} requestedFor={x.requestedFor} result={x.result} checked={x.checked} key={x.id}/>
            ));
          }}
        </Query>
      </List>
    );
  }
}

export default Builds;
