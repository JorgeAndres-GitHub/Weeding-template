import { PiChurchThin } from "react-icons/pi";
import { IoRestaurant } from "react-icons/io5";
export function Ubicacion() {
  return (
    <div className="container mt-5">
        <PiChurchThin size={70} className="d-flex justify-content-between align-items-center gap-4 mt-3 w-100 px-5"/>
        <h2 className="mb-3 wedding-text text-center">Ceremonia Religiosa</h2>
        <p className="text-center letter">Hora: 4:00 p.m.</p>
        <p className="text-center letter">San Juan Pablo II - Las Ramas</p>
        <div className="d-flex align-items-center justify-content-center">
            <a href="https://www.google.com/maps/search/?api=1&query=San+Juan+Pablo+II+Las+Ramblas+-+Zona+Norte" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="d-flex align-items-center schedule-btn px-3 py-1 rounded-pill border">
                    <div className="icon-circle d-flex justify-content-center align-items-center me-2">
                    <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <span className="schedule-text">Ver Mapa</span>
                </div>
            </a>
        </div>
        <IoRestaurant size={40} className="d-flex justify-content-between align-items-center gap-4 mt-3 w-100 px-5 mt-5"/>
        <h2 className="mb-3 wedding-text text-center mt-1">Luego de la ceremonia sirvase pasar a:</h2>
        <p className="text-center letter">Hora: 6:00 p.m.</p>
        <p className="text-center letter">Restaurante Arbola</p>
        <div className="d-flex align-items-center justify-content-center">
            <a href="https://www.google.com/maps/search/?api=1&query=Restaurante+Arbola" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="d-flex align-items-center schedule-btn px-3 py-1 rounded-pill border">
                    <div className="icon-circle d-flex justify-content-center align-items-center me-2">
                    <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <span className="schedule-text">Ver Mapa</span>
                </div>
            </a>
        </div>

        <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
            rel="stylesheet"
        />

        <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Libre+Baskerville&display=swap"
            rel="stylesheet"
        />

        <style>{`
            .wedding-text {
            font-family: 'Great Vibes', cursive;
            font-size: 1.8rem;
            color: #6b8579;
            line-height: 1.6;
            }

            .letter {
                font-family: 'Libre Baskerville', serif;
                font-size: 0.9rem;
                letter-spacing: 1px;
            }

            .schedule-btn {
                background-color: #e9f5f0;
                border: 2px solid #7aa190;
                color: #7aa190;
                font-family: 'Libre Baskerville', serif;
                cursor: pointer;
                width: fit-content;
                }

                .icon-circle {
                background-color: #cde5dd;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
                color: #7aa190;
                }

                .schedule-text {
                font-size: 1rem;
                font-weight: 500;
            }
        `}</style>
    </div>
  );
};