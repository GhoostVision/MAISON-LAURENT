import React from "react"
import "../../css/header.css"
import "../../css/carrinho.css"
import { Link } from "react-router-dom";


export function Header(){
    return(<>
    
      <header className="container-fluid ">
        <div className="row justify-content-center align-items-center">
        <h1 className="col-lg-4 col-md-4 col-sm-8 col-8">
          MAISON LAURENT
        </h1>
        <nav className="col-lg-5 col-md-5 d-none d-md-flex justify-content-center align-items-center">
          <Link to="/">INICIO</Link>
          <Link to="/colecao_masculina">HOMEM</Link>
          <a href="#">MULHER</a>
          <a href="#">CRIANÇAS</a>
          <a href="#">PRESENTES</a>
        </nav>
        <div className="col-lg-3 col-md-2 col-sm-2 col-2 buttons-user">
          <button className="btn">L</button>
          <Link to={"./carrinho"} className="btn position-relative">C<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill border border-bg theme-danger">10</span></Link>
        </div>
      <div className="dropdown col-md-2 d-md-none col-sm-2 col-2">
       <button className="btn">=</button>
      </div>
      </div>
      </header>
      </>
    );
}