import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react'
import { BuildResult } from '../schemas/BuildResult'
import { gql } from "apollo-boost";
import { Mutation } from 'react-apollo';

interface BuildProps {
  buildName: string;
  requestedFor: string;
  result: BuildResult;
  checked: boolean;
  id: number;
}

interface BuildState {
  checked: boolean;
}

class Build extends Component<BuildProps, BuildState> {

  constructor(props: BuildProps) {
    super(props);
    
    this.state = { checked: props.checked };

    this.render = this.render.bind(this);
  }

  render() {
    const query = gql`
    mutation check($id:Int!) {
      check(id: $id){
        checked
      }
    }
  `;
    return (
      <Mutation mutation={query} variables={{ id: this.props.id }}>
        {(checked: any) => (
          <List.Item>{this.props.id}:{this.props.buildName}:{this.props.requestedFor}:{this.props.result}:{`${this.state.checked}`}
            <Button onClick={ async e =>
              { 
                const isChecked = (await checked()).data.check.checked as boolean;

                this.setState({ checked: isChecked });
              }
              }>
              check
            </Button>
          </List.Item>
        )}
      </Mutation>
    );
  }
}

export default Build;
