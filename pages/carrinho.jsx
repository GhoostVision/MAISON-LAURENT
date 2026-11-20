import "../css/carrinho.css"

export function Carrinho(){
    return(<>
        <div className="topo_carrinho">
            <h2>Cesto de Compras</h2>
        </div>
        <div className="carrinho">
            <div className="produtos_carrinho">
                <div className="produto d-flex">
                    <img src="https://i.pinimg.com/736x/40/1c/e6/401ce689945e39e191cadba698cde5d4.jpg" alt="" />
                    <div>
                    <p>Oculor Havana</p>
                    <span>R$ 240,00</span>
                    <div className="d-flex quantidade">
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="finalizar_carrinho">
                <span>Total:R$ 240,00</span>
                <button>FINALIZAR PEDIDO</button>
            </div>
        </div>
        </>
    )
}