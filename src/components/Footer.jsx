import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      padding: '1rem',
      backgroundColor: '#000',
      color: '#fff',
      borderTop: '2px solid #fff',
      marginTop: '2rem',
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        textAlign: 'center', 
        alignItems: 'center',
      }}>
        <p style={{ margin: 0 }}>© 2025 EggFraHangen. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
