import couple from "../assets/couple.png";

export function Vestuario() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div
          className="card shadow-lg border-0 rounded-5 mt-5 custom-card"
          style={{
            maxWidth: "600px",
            backgroundColor: "#FFF8E7",
            borderRadius: "20px",
          }}
        >
          <div className="card-header border-0">
            <p className="wedding-suit px-4 text-center text-uppercase">
              Protocolo de Vestuario
            </p>
          </div>
          <div className="card-body row d-flex justify-content-center align-items-center text-center vestuario-row">
            <div className="col-12 col-md-4 mb-2">
              <p className="text-muted fw-bold letter no-break">
                Hombres: Guayabera o camisa.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-2">
              <img
                src={couple}
                alt="Vestuario"
                className="img-fluid"
                style={{ maxWidth: "120px" }}
              />
            </div>
            <div className="col-12 col-md-4 mb-2">
              <p className="text-muted fw-bold letter no-break">
                Mujeres: Vestido colores pastel.
              </p>
            </div>
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
          color: #DAA520;
          line-height: 1.6;
          letter-spacing: 10px;
        }
        .custom-card {
          background-color: #FFF8E7 !important;
          border-radius: 20px;
        }
        .no-break {
          word-break: keep-all;
          white-space: normal;
        }
        @media (max-width: 768px) {
          .vestuario-row > div {
            max-width: 100%;
            flex: 0 0 100%;
          }
          .wedding-suit {
            font-size: 1.2rem;
            letter-spacing: 4px;
          }
        }
      `}</style>
    </>
  );
}
