import React from "react";

function Header() {
  return (
    <header style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '1rem', 
      backgroundColor: '#000',         // Svart bakgrunn
      borderBottom: '2px solid #fff',    // Hvit outline nederst
      zIndex: 1000,
      color: '#fff'                     // Setter standard tekstfarge til hvit
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0 }}>EggFraHangen</h1>
        <nav>
          <ul style={{ 
            listStyle: 'none', 
            margin: 0, 
            padding: 0, 
            display: 'flex', 
            gap: '1rem' 
          }}>
            <li><a href="#hjem" style={{ color: '#fff', textDecoration: 'none' }}>Hjem</a></li>
            <li><a href="#om" style={{ color: '#fff', textDecoration: 'none' }}>Om Produktet</a></li>
            <li><a href="#kontakt" style={{ color: '#fff', textDecoration: 'none' }}>Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;