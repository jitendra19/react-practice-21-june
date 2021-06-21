import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
  counter: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      counter: 0
    };
  }

  updateCounter = incrementBy => {
    console.log('in parent comp index!!');
    this.setState((state, props) => {
      return { counter: state.counter + incrementBy };
    });
  };

  render() {
    return (
      <>
        <Hello
          name={this.state.name}
          counter={this.state.counter}
          updateCounter={this.updateCounter}
        />
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
