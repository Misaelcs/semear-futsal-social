import './App.css';
import Header from './components/Header.js';
import Display from './components/Display.js';
import ContentSection from './components/ContentSection.js';
import LocationSection from './components/LocationSection.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Display />
      <ContentSection />
      <LocationSection />
      <Contact />
    </div>
  );
}

export default App;
