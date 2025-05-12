import hexagono from "../assets/hexagono.png";
import final from "../assets/final.png";

export function Footer() {
  return (
    <>
      <div className="row">
        {/* Columna izquierda */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center mb-4">
          <img src={final} alt="Vestuario" className="mb-3 img-fluid" />
          <p className="text-center wedding-text px-3">
            Tu compañia es nuestro mejor regalo, no olvidas confirmar tu
            asistencia al <p className="wedding-suit">3006722701</p>
          </p>
        </div>

        {/* Columna derecha */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div className="rotating-image-container">
            <img src={hexagono} alt="Vestuario" className="rotating-image" />
            <p className="text-center wedding-text px-3">
              Una Boda <br />
              se vive tres veces <br />
              Al soñarla <br />
              Al vivirla <br />
              Al recordarla.
            </p>
          </div>
        </div>
      </div>
      <p className="text-center wedding-suit m-5">Te esperamos!</p>

      <style>{`
        .rotating-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px; /* Ajusta el tamaño del contenedor */
          width: 300px; /* Ajusta el tamaño del contenedor */
        }

        .rotating-image {
          position: absolute;
          width: 110%; /* Aumenta el tamaño de la imagen */
          height: 110%; /* Aumenta el tamaño de la imagen */
          animation: spin 15s linear infinite; /* Animación de rotación más lenta */
          opacity: 0.7; /* Hace la imagen un poco más transparente */
        }

        .text-center {
          position: relative;
          z-index: 1; /* Asegura que el texto esté encima de la imagen */
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
