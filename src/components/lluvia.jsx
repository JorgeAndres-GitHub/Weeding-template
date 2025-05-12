import sobre from "../assets/sobre.png";

export function Lluvia() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <img
          src={sobre}
          alt="Sobre"
          className="img-fluid"
          style={{
            maxWidth: "200px",
            animation: "swing 3s ease-in-out infinite", // Animación de balanceo
          }}
        />
      </div>
      <h2 className="wedding-rain text-center mt-3">Lluvia de sobres</h2>

      <style>{`
      .wedding-rain {
              font-family: 'Great Vibes', cursive;
              font-size: 1.8rem;
              color: #DAA520;
              line-height: 1.6;
    }

        @keyframes swing {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </>
  );
}
