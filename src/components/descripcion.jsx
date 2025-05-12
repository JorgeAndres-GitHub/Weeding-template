export function Descripcion() {
  return (
    <>
      <div className="row mt-5 text-center descripcion-container">
        <p className="wedding-text">
          Por la voluntad de Dios nos conocimos, por su gracia nos enamoramos,
          bajo su luz hemos ido descubriendo nuestro camino, y en su presencia,
          queremos consagrar nuestro hogar.
        </p>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .descripcion-container {
          padding: 0 20%; /* Deja un 10% de espacio a los lados */
        }

        .wedding-text {
          font-family: 'Great Vibes', cursive;
          font-size: 1.8rem;
          color: #6b8579;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
