import { Link } from "react-router-dom";
import '../src/App.css'

export default function NavBar() {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: "row", marginTop: '10px', padding: '5px', width: '90dvw', height: '15px', alignItems: 'center', justifyContent: 'center', gap: '50rem' }}>
                <div style={{ textAlign: 'left', color: 'darkmagenta' }}>
                    <h2>Ornelas Storage</h2>
                </div>
                <div style={{ display: 'flex', gap: '4rem', }}>
                    <Link to="/"> <p className="links"> Home </p></Link>
                    <Link to='./Itens'> <p className="links"> Itens </p> </Link>
                </div>
            </div>
            <hr style={{ width: '99dvw' }}></hr>
        </>
    )


}  