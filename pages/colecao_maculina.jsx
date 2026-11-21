import modelo from '../src/assets/imagens/modelo_homem.jpg'
import '../css/cards.css'
import "../css/responsividade.css"
import "../css/tela_recomendacao.css"
import "../css/carrinho.css"

export function Colecao_masculina({adicionarAoCarrinho}){

    const roupas_principal = [
        {id:1, img:`https://i.pinimg.com/736x/14/8c/e4/148ce41f18231f2eb2adb2fa3e150588.jpg`, nome:`Polo Tricor`,preco:230.00 },
        {id:2, img:`https://i.pinimg.com/736x/51/21/ed/5121ed5b84ba88e8651b59c6c356b064.jpg`, nome:`Polo Simples`,preco:2230.00 },
        {id:3, img:`https://i.pinimg.com/736x/8f/e2/2f/8fe22f34fcc7754703acefbc741e9550.jpg`, nome:`Blusa Reta `,preco:2320.00 },
        {id:4, img:`https://i.pinimg.com/1200x/2e/21/a1/2e21a1485d50c6282b79068182371c7b.jpg`, nome:`Blusa com Gola `,preco:320.00 }
    ]
    const acessorios_principal = [
        {id:1, img:`https://i.pinimg.com/736x/15/3b/cd/153bcd7d882f69e8c0ca02bba2f1bb07.jpg`, nome:`Relógio Clássico`,preco:230.00 },
        {id:2, img:`https://i.pinimg.com/736x/40/1c/e6/401ce689945e39e191cadba698cde5d4.jpg`, nome:`Óculos Havana`,preco:2230.00 },
        {id:3, img:`https://i.pinimg.com/736x/f5/4f/cd/f54fcdd9687c8eb6af26694fc0806c6b.jpg`, nome:`Boné Clássico`,preco:2320.00 },
        {id:4, img:`https://i.pinimg.com/736x/92/c6/1b/92c61b8df258cce873e16b0eef2bbd20.jpg`, nome:`Porta-Cartões Marrom`,preco:320.00 }
    ]
    const calcas_principal = [
        {id:1, img:`https://i.pinimg.com/736x/0e/fd/31/0efd317c6912255c841514abfac3b989.jpg`, nome:`Bermuda de Linho`,preco:159.95 },
        {id:2, img:`https://i.pinimg.com/1200x/19/b1/c4/19b1c4ddb50d738ac75c9909088b5944.jpg`, nome:`Calça de Linho`,preco:249.99 },
        {id:3, img:`https://i.pinimg.com/736x/d4/ae/4f/d4ae4fa5cda278ee7d3f8701129672e0.jpg`, nome:`Calça Alfaiataria`,preco:320.59 },
        {id:4, img:`https://i.pinimg.com/1200x/5a/62/3e/5a623ef469606c55057bd1a54fbbddb7.jpg`, nome:`Calças Jeans`,preco:120.95 }
    ]

    const ExibirRoupas = roupas_principal.map((produto)=>
     <div id='camisas_masculina' className='card_produto col-6 col-sm-6 col-lg-3' key={produto.id.toString()}>
        <img className='card_img' src={produto.img} alt={produto.nome} />
        <h2 className='titulo_card ft-2'>{produto.nome}</h2>
        <p className='preco_card'>{produto.preco.toLocaleString(`pt-BR`, {style: `currency`,currency: `BRL`})}</p>
        <button className='button_card' onClick={()=>adicionarAoCarrinho(produto)}>ADICIONAR AO CARRINHO</button>
     </div>
    )

    const ExibirAcessorios = acessorios_principal.map((acessorios)=>
     <div id='acessorios_masculino' className='card_produto col-6 col-sm-6 col-lg-3' key={acessorios.id.toString()}>
        <img className='card_img' src={acessorios.img} alt={acessorios.nome} />
        <h2 className='titulo_card ft-2'>{acessorios.nome}</h2>
        <p className='preco_card'>R$ {acessorios.preco.toLocaleString(`pt-BR`, {style: `currency`,currency: `BRL`})}</p>
        <button className='button_card'>ADICIONAR AO CARRINHO</button>
     </div>
    )

    const ExibirCalcas = calcas_principal.map((calcas)=>
     <div className='card_produto col-6 col-sm-6 col-lg-3' key={calcas.id.toString()}>
        <img className='card_img' src={calcas.img} alt={calcas.nome} />
        <h2 className='titulo_card ft-2'>{calcas.nome}</h2>
        <p className='preco_card'>R${calcas.preco.toLocaleString(`pt-BR`, {style: `currency`,currency: `BRL`})}</p>
        <button className='button_card'>ADICIONAR AO CARRINHO</button>
     </div>
    )

    function Tela_recomendacao1(){
        return(
            <div className='container-fluid my-5'>
                <div className='row g-0 p-0 m-0'>
                <div className='foto_recomendacao d-none d-md-block col-md-4'>
                    <img src="https://i.pinimg.com/736x/7d/55/e9/7d55e9c82fad2f2ed8987f21913a8abf.jpg" alt="" srcset="" />
                </div>
                <div id='imagem_acessorio' className='info_recomendacao col-12 col-md-8'>
                    <h2>Detalhes que fazem a diferença</h2>
                    <p>Os acessórios expressam personalidade e dão identidade ao visual. Um relógio, um cinto ou uma carteira podem transformar uma composição simples em algo elegante. Afinal, a sofisticação está nos detalhes.</p>
                    <a href='#acessorios_masculino'>VER ACESSÓRIOS</a>
                </div>
                </div>
            </div>
        )
    }

    function Tela_recomendacao2(){
        return(
            <div className='container-fluid my-5'>
                <div className='row g-0 p-0 m-0'>
                <div className='foto_recomendacao d-none d-md-block col-md-4'>
                    <img src="https://i.pinimg.com/736x/33/5b/52/335b527cca996217b69c7efb0736723a.jpg" alt="" srcset="" />
                </div>
                <div id='imagem_camisas' className='info_recomendacao col-12 col-md-8'>
                    <h2>Detalhes que fazem a diferença</h2>
                    <p>Os acessórios expressam personalidade e dão identidade ao visual. Um relógio, um cinto ou uma carteira podem transformar uma composição simples em algo elegante. Afinal, a sofisticação está nos detalhes.</p>
                    <a href='#camisas_masculina'>VER CAMISAS</a>
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
        <Tela_recomendacao1 />
        <div className='container-fluid p-0 my-4'>
            <div className='row d-flex m-0 p-0 g-1'>
                {ExibirCalcas}
            </div>
        </div>
        <Tela_recomendacao2 />
        <div className='container-fluid p-0 my-4'>
            <div className='row d-flex m-0 p-0 g-1'>
                {ExibirAcessorios}
            </div>
        </div>
        </>
    );
}