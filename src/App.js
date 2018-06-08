import React, { Component } from 'react'
import './App.scss'
import Header from './Header/Header.js'
import MainSection from './MainSection/MainSection.js'
// name: 0-8-4

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <MainSection></MainSection>
      </div>
    );
  }
}

export default App;
