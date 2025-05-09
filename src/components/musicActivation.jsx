import { useRef } from "react";

export function MusicActivation() {

    const audioRef = useRef(null);

    const playMusic = () => {
        audioRef.current?.play();
    }

    return(
        <>
            <div className="row mt-5">
                <div className="col-6 offset-3">
                    <p className="text-muted">Presiona el <i class="bi bi-balloon-heart-fill"></i> para escuchar nuestra canción</p>
                    <span className="line"></span>
                </div>
            </div>
            <div className="row">
                <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
                    <div className="col-1">
                        <i class="bi bi-skip-start-fill control-icon"></i>
                    </div>
                    <div className="col-1 icon-circle m-4" onClick={playMusic} style={{cursor:'pointer'}}>
                        <i class="bi bi-balloon-heart control-icon"></i>
                    </div>
                    <div className="col-1">
                        <i class="bi bi-skip-end-fill control-icon"></i>
                    </div>
                </div>                
            </div>
            
            <audio ref={audioRef} src="/weddingMusic.mp3"></audio>

            <style>{`
                .line {
                    display: inline-block;
                    width: 100%;
                    height: 1px;
                    background-color: #7aa190;
                    margin: 0 10px;
                    vertical-align: middle;
                }

                .control-icon {
                    font-size: 2rem;
                    color: #7aa190;
                }

                .icon-circle {
                    width: 60px;
                    height: 60px;
                    background-color: #7aa19022;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
}