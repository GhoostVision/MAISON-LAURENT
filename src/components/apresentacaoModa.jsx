import { Link } from "react-router-dom";
import "../../css/moda.css";

export function Moda() {
  return (
      <section className="container-fluid p-0">
        <div className="row g-1 my-1">
        <article className=" col-12 col-md-6">
         <div className="modelo_homem">
          <h3>Coleção Masculina</h3>
          <p>Vista sua essência. Marque presença por onde passar.</p>
          <Link to="/moda_masculina">EXPLORAR COLEÇÃO</Link>
         </div>
        </article>
        <article className=" col-12 col-md-6">
         <div className="modelo_mulher">
          <h3>Coleção Feminina</h3>
          <p>Descubra sua elegância e transforme cada momento em uma expressão deestilo.</p>
          <Link to="moda_feminina">EXPLORAR COLEÇÃO</Link>
         </div>
        </article>
        </div>
      </section>
  );
}
