import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Display from './components/Display.js';
import ContentSection from './components/ContentSection.js';
import LocationSection from './components/LocationSection.js';
import Contact from './components/Contact.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Display />
        <ContentSection />
        <LocationSection />
        <Contact />
      </div>
    );
  }
}

export default App;
