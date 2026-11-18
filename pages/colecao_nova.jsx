import modelo from '../src/assets/imagens/modelo_homem.jpg'
import '../css/cards.css'

export function Colecao_nova(){

    const roupas_principal = [
        {id:1, img:modelo, nome:`Camisa`,preco:230.00 },
        {id:2, img:modelo, nome:`Camisa Smoke`,preco:2230.00 },
        {id:3, img:modelo, nome:`Camisa Bosta`,preco:2320.00 },
        {id:4, img:modelo, nome:`Camisa Bosta`,preco:320.00 }
    ]

    const ExibirRoupas = roupas_principal.map((roupa)=>
     <div className='card_produto col-3' key={roupa.id.toString()}>
        <img className='card_img' src={roupa.img} alt={roupa.nome} />
        <h2 className='titulo_card ft-2'>{roupa.nome}</h2>
        <p className='preco_card'>R${roupa.preco}</p>
        <button className='button_card'>ADICIONAR AO CARRINHO</button>
     </div>
    )

    return(
        <>
        <div className='container-fluid p-0'>
            <div className='row d-flex m-0 p-0 g-1'>
                {ExibirRoupas}
            </div>
        </div>
        </>
    );
}