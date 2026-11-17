import { Header } from './src/components/header'
import { Apresentacoes } from './pages/apresentacoes'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

 export function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Apresentacoes />} />
            </Routes>
        </BrowserRouter>
    )
}

