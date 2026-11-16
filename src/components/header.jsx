import "../../css/header.css"

export function Header(){
    return <>
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
          <a href="" className="btn">C</a>
          <a href="" className="btn">L</a>
        </div>
      <div className="dropdown col-md-2 d-md-none col-sm-2 col-2">
       <button className="btn">=</button>
      </div>
      </div>
      </header>
    </>
}