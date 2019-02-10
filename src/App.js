import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Post from './components/Post';
class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="Selena" avatar="https://openclipart.org/download/247324/abstract-user-flat-1.svg" caption="Moving the community!" image="https://i2-prod.mirror.co.uk/incoming/article13215795.ece/ALTERNATES/s810/0_MAIN-JFP_CHP_090918selenagomez_9339-JPG.jpg" />
          <Post nickname="Selena" avatar="https://openclipart.org/download/247324/abstract-user-flat-1.svg" caption="Holding a mic" image="https://i2-prod.mirror.co.uk/incoming/article13215795.ece/ALTERNATES/s810/0_MAIN-JFP_CHP_090918selenagomez_9339-JPG.jpg" />
    {/*

          <img alt="Icon Living" src="https://i2-prod.mirror.co.uk/incoming/article13215795.ece/ALTERNATES/s810/0_MAIN-JFP_CHP_090918selenagomez_9339-JPG.jpg" />
          <img src="https://openclipart.org/download/247324/abstract-user-flat-1.svg" alt="Chris" />

       more posts */}
        </section>
      </div>;
  }
}

export default App;
