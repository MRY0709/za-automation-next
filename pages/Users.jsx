function Users() {
  const clients = [
    "Dubai Mass Piling and Foundation",
    "Quality Engineering",
    "Al Bustan Dewatering",
    "Soiltic Piling and Foundation",
    "CPC Piling and Foundation",
    "Pure Piling and Foundation",
    "Gulf Star Contracting",
    "ABT Piling and Foundation",
    "Teracor Piling and Foundation",
    "Al Zahraa Piling and Foundation",
    "Al Rabat Foundation",
    "Stromek Emirates Foundation",
    "United Arabian Foundation",
    "Atlas Foundation",
    "Delta Foundation",
    "Tech Foundation",
    "Dutch Foundation",
    "GEO Foundation",
    "Australian Piling Tech",
    "Anmol Piling",
  ];

  return (
    <section className="clients-section">
      <p className="clients-subtitle">OUR CLIENTS</p>

      <h1 className="clients-title">Companies We Work With</h1>

      <p className="clients-desc">
        We are proud to work with leading companies in the foundation and
        construction industry.
      </p>

      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <span className="client-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{client}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;
