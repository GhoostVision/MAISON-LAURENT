import { Header } from './src/components/header'
import { Apresentacoes } from './pages/apresentacoes'
import { Colecao_masculina } from "./pages/colecao_maculina"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

 export function App() {
    
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Apresentacoes />} />
                <Route path='/colecao_masculina' element={<Colecao_masculina/>}/>
            </Routes>
        </BrowserRouter>
    )
}

