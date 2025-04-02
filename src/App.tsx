import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BodyContent from './components/BodyContent/BodyContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContent />
      <Footer />
    </div>
  );
}

export default App;