import './App.css';
import React from 'react'

import Header from '../Components/Header';
import Clock from '../Components/Clock';
import Loading from '../Components/Loading';
class App extends React.Component {
  state = { showClock: false }

  toggleClock = () => {
    this.setState((state) => {
      return { showClock: !state.showClock }
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="text-center pt-5">
          <button className="btn btn-dark mb-4" onClick={this.toggleClock}>{this.state.showClock && "Hide" || "Show"}</button>
          <br />
          {this.state.showClock && <Clock />}
          <br />
          <Loading />
        </div>
      </div>
    );
  }
}

export default App;
