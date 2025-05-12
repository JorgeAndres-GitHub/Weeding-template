import couple from "../assets/couple.png";

export function Vestuario() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div
          className="card shadow-lg border-0 rounded-5 mt-5 custom-card"
          style={{
            maxWidth: "600px",
            backgroundColor: "#FFF8E7", // Fondo crema suave
            borderRadius: "20px", // Esquinas más redondeadas
          }}
        >
          <div className="card-header border-0">
            <p className="wedding-suit px-5 text-center text-uppercase">
              Protocolo de Vestuario
            </p>
          </div>
          <div className="card-body row d-flex justify-content-center align-items-center text-center">
            <p className="col-4 text-muted fw-bold letter">
              Hombres: Guayabera o camisa.
            </p>
            <img
              src={couple}
              alt="Vestuario"
              className="img-fluid col-3"
              style={{ maxWidth: "200px" }}
            />

            <p className="col-4 text-muted fw-bold letter">
              Mujeres: Vestido colores pastel.
            </p>
          </div>
        </div>
      </div>

      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      />

      <style>{`
                    .wedding-suit {
                    font-family: 'Great Vibes', cursive;
                    font-size: 1.8rem;
                    color: #DAA520; /* Dorado más apagado */
                    line-height: 1.6;
                    letter-spacing: 10px; /* Espaciado entre letras */
            }
            `}</style>

      <style>{`
        .custom-card {
          background-color: #FFF8E7 !important; /* Fondo crema suave */
          border-radius: 20px; /* Esquinas más redondeadas */
        }
      `}</style>
    </>
  );
}
