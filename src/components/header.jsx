import headerGif from '../assets/header.gif';
import { MusicActivation } from './musicActivation';

export function Header() {
    return(
        <>
            <div className="w-100">
                <div className="row">
                    <img src={headerGif} alt="Decoracion de Boda" className="img-fluid mb-4" style={{width:'100%', marginTop:'0', display:'block'}}></img>
                    <h5 className="text-muted" style={{color:'#7aa190'}}>Nos Casamos</h5>
                    <h1 className="display-4" style={{fontFamily: "'Dancing Script', cursive", color:'#7aa190'}}>Andrés</h1>
                    <h2 className="text-muted" style={{color:'#7aa190'}}>&</h2>
                    <h1 className="display-4" style={{fontFamily: "'Dancing Script', cursive", color:'#7aa190'}}>Susana</h1>
                </div>
            </div>
            <MusicActivation />
        </>
    )
}