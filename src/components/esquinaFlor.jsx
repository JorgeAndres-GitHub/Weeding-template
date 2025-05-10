import florIzquierda from '../assets/florIzquierda.png';

export function EsquinaFLor() {
  return (
    <>
      <img
        src={florIzquierda}
        alt="Flor decorativa"
        className="img-fluid flor-esquina position-fixed"
      />

      <style>{`
        .flor-esquina {
          top: -50px;
          left: -120px;
          width: 350px;
          height: auto;
          z-index: 9999;
          margin: 0;
          padding: 0;
          pointer-events: none;
          transform: rotate(30deg);
        }

        @media (max-width: 768px) {
          .flor-esquina {
            width: 300px;
            top: -50px;
            left: -100px;
          }
        }

        @media (max-width: 480px) {
          .flor-esquina {
            width: 250px;
            top: -35px;
            left: -90px;
          }
        }
      `}</style>
    </>
  );
}
