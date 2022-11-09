import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Display from './components/Display.js';
import Body from './components/Body.js';
import LocationSection from './components/LocationSection.js';
import Contact from './components/Contact.js';

let data = {
  header:{
    logo: './img/dorito.png',
  },
  sections:{
    0:{
      header:{
        title: 'lorem ipsum data',
        subtitle: 'blablabla',
        imageSrc: 'https://images.unsplash.com/photo-1667610342417-2ec8081ac21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
      },
      body:{
        paragraphs: {
          0: {
            emphasis: 'Aaaa',
            text: 'blbalbalblal'
          },
          1: {
            emphasis: 'AAAAA',
            text: 'blbalbalblal'
          },
          2: {
            emphasis: 'AAAAA',
            text: 'blbalbalblal'
          }
        }

      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Header data={data.header}/>
      <Body data={data.sections}/>
    </div>
  )
}
export default App;
