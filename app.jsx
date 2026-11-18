import { Header } from './src/components/header'
import { Apresentacoes } from './pages/apresentacoes'
import { Colecao_nova } from './pages/colecao_nova'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

 export function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Apresentacoes />} />
                <Route path='/colecao_nova' element={<Colecao_nova/>}/>
            </Routes>
        </BrowserRouter>
    )
}

