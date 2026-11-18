import "../../css/home.css"
import { Link } from "react-router-dom";

export function Home(){
    return <>
     <section className="home justify-content-center align-items-center">
        <h2>MAISON LAURENT</h2>
        <p>Descubra nossa nova coleção de fim de ano</p>
        <Link to="/colecao_nova">EXPLORAR COLEÇÃO</Link>
     </section>
    </>
}