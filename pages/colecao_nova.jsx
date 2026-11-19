import modelo from '../src/assets/imagens/modelo_homem.jpg'
import '../css/cards.css'
import "../css/responsividade.css"
import "../css/tela_recomendacao.css"

export function Colecao_nova(){

    const roupas_principal = [
        {id:1, img:modelo, nome:`Camisa`,preco:230.00 },
        {id:2, img:modelo, nome:`Camisa Smoke`,preco:2230.00 },
        {id:3, img:modelo, nome:`Camisa Bosta`,preco:2320.00 },
        {id:4, img:modelo, nome:`Camisa Bosta`,preco:320.00 }
    ]

    const ExibirRoupas = roupas_principal.map((roupa)=>
     <div className='card_produto col-6 col-sm-6 col-lg-3' key={roupa.id.toString()}>
        <img className='card_img' src={roupa.img} alt={roupa.nome} />
        <h2 className='titulo_card ft-2'>{roupa.nome}</h2>
        <p className='preco_card'>R${roupa.preco}</p>
        <button className='button_card'>ADICIONAR AO CARRINHO</button>
     </div>
    )

    function Tela_recomendacao(){
        return(
            <div className='container-fluid my-5'>
                <div className='row g-0 p-0 m-0'>
                <div className='foto_recomendacao col-4'>
                    <img src="https://i.pinimg.com/736x/7d/55/e9/7d55e9c82fad2f2ed8987f21913a8abf.jpg" alt="" srcset="" />
                </div>
                <div className='info_recomendacao col-8'>
                    <h2>Detalhes que fazem a diferença</h2>
                    <p>Os acessórios expressam personalidade e dão identidade ao visual. Um relógio, um cinto ou uma carteira podem transformar uma composição simples em algo elegante. Afinal, a sofisticação está nos detalhes.</p>
                    <button>ADICIONAR AO CARRINHO</button>
                </div>
                </div>
            </div>
        )
    }

    return(
        <>
        <div className='container-fluid p-0 my-4'>
            <div className='row d-flex m-0 p-0 g-1'>
                {ExibirRoupas}
            </div>
        </div>
        <Tela_recomendacao />
        </>
    );
}