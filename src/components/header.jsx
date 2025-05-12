import headerGif from "../assets/header.gif";
import { MusicActivation } from "./musicActivation";
import { WeddingDate } from "./weddingDate";

export function Header() {
  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        style={{ animationDelay: `${i * 0.1}s` }}
        className="fade-in-letter"
      >
        {char}
      </span>
    ));

  return (
    <>
      <div className="header-section">
        <div className="row text-center">
          <img
            src={headerGif}
            alt="Decoracion de Boda"
            className="img-fluid mb-4"
            style={{ width: "100%", marginTop: "0", display: "block" }}
          />
          <h4 className="text-center subtitle mx-auto mb-3"></h4>
          <h5 className="text-black text-center subtitle mb-5">
            <p className="text-center">Con la bendición de Dios</p>
            <p className="text-center">y de nuestros padres</p>
            <p className="text-center">queremos compartir contigo</p>
            <p className="text-center">la alegría de</p>
            <p className="text-center">Nuestra Boda</p>
          </h5>
          <h1 className="display-4 names">{splitText("Andrés")}</h1>
          <h2 className="text-muted ampersand">&</h2>
          <h1 className="display-4 names">{splitText("Susana")}</h1>
        </div>
      </div>

      <WeddingDate />
      <MusicActivation />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .names {
          font-family: 'Great Vibes', cursive;
          color: #7aa190;
          font-size: 4rem;
        }

        .subtitle {
          color: #7aa190;
          font-family: 'Libre Baskerville', serif;
          font-style: italic;
          letter-spacing: 1px;
          text-align: center; /* Asegura que el texto esté centrado */
          margin: 0 auto; /* Centra el elemento */
        }

        .ampersand {
          color: #7aa190;
          font-family: 'Libre Baskerville', serif;
          font-style: italic;
        }

        .fade-in-letter {
          display: inline-block;
          opacity: 0;
          animation: fadeInUp 0.5s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
