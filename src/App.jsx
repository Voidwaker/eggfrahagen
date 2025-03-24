import React from 'react';
import Header from './components/header'; // Pass på riktig sti og filnavn

function App() {
  return (
    <div>
      <Header /> // Sørg for at Header-komponenten er riktig definert og eksportert
      <main>
        <h1>Velkommen til Egg fra hagen</h1>
        <p></p> // Tomt paragrafelement – du kan legge til innhold her
      </main>
    </div>
  );
}

export default App;
