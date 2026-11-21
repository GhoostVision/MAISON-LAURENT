import "../css/carrinho.css"

export function Carrinho({produto, removerDoCarrinho}){

    const ExibirProdutos = produto.map((produto)=>
            <div className="produto d-flex" key={produto.id.toString()}>
                    <img src={produto.img} />
                    <div>
                    <p>{produto.nome}</p>
                    <span>{produto.preco.toLocaleString(`pt-BR`, {style: `currency`,currency: `BRL`})}</span>
                    <div className="d-flex quantidade">
                        <button onClick={()=>removerDoCarrinho(produto.id)}>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </div>
            </div>
    )

    const total =  produto.reduce((total, produto)=> total + produto.preco, 0)

    return(<>
        <div className="topo_carrinho">
            <h2>Cesto de Compras</h2>
        </div>
        <div className="carrinho">
            <div className="produtos_carrinho">
                {ExibirProdutos}
            </div>
            <div className="finalizar_carrinho">
                <span>Total:{total.toLocaleString(`pt-BR`, {style: `currency`,currency: `BRL`})}</span>
                <button>FINALIZAR PEDIDO</button>
            </div>
        </div>
        </>
    )
}