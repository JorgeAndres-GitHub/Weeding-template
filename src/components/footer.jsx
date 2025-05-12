import hexagono from "../assets/hexagono.png";
import final from "../assets/final.png";

export function Footer() {
  return (
    <>
      <div className="row">
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <img src={final} alt="Vestuario" className="mb-3" />
          <p className="text-center wedding-text px-5">
            Tu compañia es nuestro mejor regalo, no olvidas confirmar tu
            asistencia al 3006722701
          </p>
        </div>
        <div className="col-6">
          <div className="rotating-image-container">
            <img src={hexagono} alt="Vestuario" className="rotating-image" />
            <p className="text-center wedding-text px-5">
              Una Boda <br />
              se vive tres veces <br />
              Al soñarla <br />
              Al vivirla <br />
              Al recordarla.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .rotating-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 350px; /* Aumenta el tamaño del contenedor */
          width: 350px; /* Aumenta el tamaño del contenedor */
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
