import { Home } from "../src/components/apresentacaoHome";
import { Infantil } from "../src/components/apresentacaoInfantil";
import { Presentes } from "../src/components/apresentacaoPresentes";
import { Moda } from "../src/components/apresentacaoModa";

export function Apresentacoes(){
    return(
        <main>
            <Home/>
            <Moda/>
            <Infantil/>
            <Presentes/>
        </main>
    )
}