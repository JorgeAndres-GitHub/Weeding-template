export function ScheduleButton() {
      const googleCalendarUrl = "https://www.google.com/calendar/render?action=TEMPLATE&text=Nos+Casamos+%F0%9F%92%8D&dates=20250614T160000Z/20250614T180000Z&details=¡Acompáñanos+en+este+día+tan+especial!";
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <div className="d-flex align-items-center schedule-btn px-3 py-1 rounded-pill border">
                        <div className="icon-circle d-flex justify-content-center align-items-center me-2">
                        <i class="bi bi-calendar-heart"></i>
                        </div>
                        <span className="schedule-text">Agendar fecha</span>
                    </div>
                </a>
            </div>

                <style>{`
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
        </>
    );
}
