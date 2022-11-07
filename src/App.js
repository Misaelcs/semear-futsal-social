import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Display from './components/Display.js';
import ContentSection from './components/ContentSection.js';
import LocationSection from './components/LocationSection.js';
import Contact from './components/Contact.js';

data = {
  header:{
    logo: '',
  },
  sections:{
    0:{
      header:{
        title: 'lorem ipsum data',
        subtitle: 'blablabla',
        imageSrc: 'https://images.unsplash.com/photo-1667610342417-2ec8081ac21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
      },
      body:{

      }
    },
    1:{
      header:{
        title: 'lorem ipsum data',
        subtitle: 'blablabla',
        imageSrc: 'https://images.unsplash.com/photo-1667610342417-2ec8081ac21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
      },
      body:{

      }
    },
    2:{
      header:{
        title: 'lorem ipsum data',
        subtitle: 'blablabla',
        imageSrc: 'https://images.unsplash.com/photo-1667610342417-2ec8081ac21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
      },
      body:{

      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body section={data.sections}/>
    </div>
  )
}
export default App;
