import React, { Component } from 'react';
import Navigation from './components/Navigation.jsx';
import './fonts/stylesheet.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}
export default App;
