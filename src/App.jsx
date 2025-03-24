import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh'
    }}>
      <Header />
      <main style={{ 
        flexGrow: 1, 
        marginTop: '100px',
        padding: '1rem'
      }}>
        <h1>Velkommen til Egg fra hagen</h1>
        <p>
          Nettsiden er under oppbygging, tanken er å ha en nettside hvor folk kan lese om
          hønene jeg har i hagen, se hva de får, hvordan de lever og litt grunnleggende informasjon.
          Gjør det kun for gøy.
        </p> 
      </main>
      <Footer />
    </div>
  );
}

export default App;

