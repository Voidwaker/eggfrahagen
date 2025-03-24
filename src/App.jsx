import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Footer from './components/Footer';
import HenList from './components/HenList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1>Velkommen til Egg fra hagen</h1>
        <p>
          Nettsiden er under oppbygging. Tanken er å ha en nettside hvor folk kan lese om
          hønene, se hva de får og hvordan de lever.
        </p>
        {/* HenList-komponenten rendres her */}
        <HenList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
