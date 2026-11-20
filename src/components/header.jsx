import React from "react"
import "../../css/header.css"
import "../../css/carrinho.css"


export function Header(){
      const [carrinhoAberto, setcarrinhoAberto] = React.useState(false)

      function abrirCarrinho(){
          setcarrinhoAberto(true)
      }

      function fecharCarinho(){
          setcarrinhoAberto(false)
      }
      function Carrinho() {
        return (
            <div className="carrinho">
                <div className="carrinho_box">
                  <div className=" ">
                    <p>Carrinho</p>
                    <button onClick={fecharCarinho}>X</button>
                  </div>
                </div>
            </div>
        )
      }
    return(<>
    
      <header className="container-fluid ">
        <div className="row justify-content-center align-items-center">
        <h1 className="col-lg-4 col-md-4 col-sm-8 col-8">
          MAISON LAURENT
        </h1>
        <nav className="col-lg-5 col-md-5 d-none d-md-flex justify-content-center align-items-center">
          <a href="#">HOMEM</a>
          <a href="#">MULHER</a>
          <a href="#">CRIANÇAS</a>
          <a href="#">PRESENTES</a>
        </nav>
        <div className="col-lg-3 col-md-2 col-sm-2 col-2 buttons-user">
          <button className="btn">L</button>
          <button onClick={abrirCarrinho} className="btn position-relative">C<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill border border-bg theme-danger">10</span></button>
        </div>
      <div className="dropdown col-md-2 d-md-none col-sm-2 col-2">
       <button className="btn">=</button>
      </div>
      </div>
      </header>
      {carrinhoAberto && <Carrinho />}
      </>

    );
}