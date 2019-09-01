import React, { Component } from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';

interface IState {
  numVisits: number;
}

interface IProps {
}

export class App extends Component<IProps, IState> {
  public state: IState = {
    numVisits: 0
  };

  public async componentDidMount() {
    try {
      const response = await axios.get('/api/') as AxiosResponse<{numVisits: number}>;
      
      this.setState({
        numVisits: response.data.numVisits
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  public render() {
    return (
      <div>
          Nums Visits: {this.state.numVisits}
      </div>
    );
  }
  
}
