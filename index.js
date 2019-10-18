import React from 'react';
import render from 'react-dom';
import { Welcome } from './Components/Welcome';


class App extends Component{
  render() {
    return (
      <div className="App">
      <Welcome/>
      </div>
    );
  }
}

export default App;

    