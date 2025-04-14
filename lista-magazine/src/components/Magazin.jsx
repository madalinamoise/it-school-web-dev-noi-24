const Magazin = ({ adresa, logo, program, titlu, descriere, id }) => {
    // Creează link către Google Maps din adresă
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adresa)}`;
  
    // Funcție pentru a afișa sau ascunde programul
    const toggleProgram = () => {
      const programElement = document.getElementById(`program-${id}`); // ID unic pentru fiecare magazin
      if (programElement.style.display === 'none') {
        programElement.style.display = 'block';
      } else {
        programElement.style.display = 'none';
      }
    };
  
    return (
      <div className="magazin">
        <img src={logo} alt="Logo Magazin" className="logo" />
        <h2>{titlu}</h2>
        <p>{descriere}</p>
        <h3>{adresa}</h3>
        <button
          style={{ marginTop: '10px' }}
          onClick={toggleProgram}
        >
          Vezi programul
        </button>
  
        {/* Programul magazinului, inițial ascuns */}
        <p id={`program-${id}`} style={{ display: 'none' }}>
          <strong>Program:</strong> {program}
        </p>
  
        <button
          style={{ marginTop: '10px' }}
          onClick={() => window.open(mapsLink, '_blank')}
        >
          Vezi locația pe hartă
        </button>
      </div>
    );
  };
  
  export default Magazin;