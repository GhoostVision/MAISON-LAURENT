import "../../css/presentes.css"
import { Link } from "react-router-dom";

export function Presentes(){
    return (
      <section className="container-fluid p-0">
        <div className="row g-1 my-1">
        <article className=" col-12 col-md-6">
         <div className="presentes_separado">
          <h3>Presentes Especiais</h3>
          <p>Surpreenda quem você ama com presentes que tornam cada ocasião inesquecível.</p>
          <a to="presentes">EXPLORAR COLEÇÃO</a>
         </div>
        </article>
        <article className=" col-12 col-md-6">
         <div className="presentes_kits">
          <h3>Kits para Presentear</h3>
          <p>Combinações exclusivas para presentear com elegância e sofisticação.</p>
          <Link to="kits_presentes">EXPLORAR COLEÇÃO</Link>
         </div>
        </article>
        </div>
      </section>
  );
}