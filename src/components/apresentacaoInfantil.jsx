import "../../css/infantil.css"
import { Link } from "react-router-dom";

export function Infantil(){
    return(
        <section className="container-fluid infantil">
            <article>
             <h3>Coleção Infantil</h3>
             <p>Pequenos estilos, grandes personalidades. Descubra nossa coleção para os pequenos.</p>
             <Link to="/infantil">EXPLORAR COLEÇÃO</Link>
            </article>
        </section>
    );
}