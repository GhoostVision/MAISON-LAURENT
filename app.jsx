import { Header } from './src/components/header'
import { Apresentacoes } from './pages/apresentacoes'
import { Colecao_masculina } from "./pages/colecao_maculina"
import { Carrinho } from './pages/carrinho'
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

 export function App() {
     const [carrinho, setCarrinho] = useState([]);

    function adicionarAoCarrinho(produto) {
        setCarrinho((novoItem) => [...novoItem, produto]);
    }

    function removerDoCarrinho(id){
        setCarrinho((novoItem) =>novoItem.filter((produto) => produto.id !== id));
    }

    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Apresentacoes />} />
                <Route path='/colecao_masculina' element={<Colecao_masculina adicionarAoCarrinho={adicionarAoCarrinho}/> } />
                <Route path='/carrinho' element={<Carrinho produto={carrinho} removerDoCarrinho={removerDoCarrinho} />}/>
            </Routes>
        </BrowserRouter>
    )
}

