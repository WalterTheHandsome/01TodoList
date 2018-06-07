import React, { Component } from 'react'
import './scss/_main.scss'
import Header from './Header/Header.js'
import MainSection from './MainSection/MainSection.js'
// name: 0-8-4

class App extends Component {
  render() {
    return (
      <div >
        <Header></Header>
        <MainSection></MainSection>
      </div>
    );
  }
}

export default App;
