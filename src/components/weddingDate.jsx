import { ScheduleButton } from "./scheduleButton"

export function WeddingDate() {
    return(
        <>
            <div className="text-center my-5 wedding-date">
                <h5 className="fw-light text-uppercase month">Junio</h5>

                <div className="row align-items-center justify-content-center">
                    <div className="col-3 text-end">
                        <div className="gold-line"></div>
                        <div className="fw-bold text-uppercase side-text">Sábado</div>
                    </div>

                    <div className="col-3 display-3 fw-bold main-number">14</div>

                    <div className="col-3 text-start">
                        <div className="gold-line"></div>
                        <div className="fw-bold side-text">2025</div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <ScheduleButton />
            </div>
            

            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Libre+Baskerville&display=swap"
                rel="stylesheet"
            />

            <style>{`
                .gold-line {
                height: 2px;
                background: linear-gradient(to right, #d4af37, #d4af37);
                margin-bottom: 5px;
                }

                .wedding-date {
                font-family: 'Libre Baskerville', serif;
                }

                .month {
                font-family: 'Libre Baskerville', serif;
                font-size: 1.2rem;
                letter-spacing: 1px;
                }

                .side-text {
                font-family: 'Libre Baskerville', serif;
                font-size: 1rem;
                }

                .main-number {
                font-family: 'Playfair Display', serif;
                font-size: 4rem;
                }
            `}</style>
        </>
    )
}