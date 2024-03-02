import React,{useState} from "react";
import "./footer.css"

function Footer () {
    const [numero, setNumero] = useState (0)

    const Adicionar = () => {
        setNumero(numero +1)
    }

    const Remover = () => {
        setNumero(numero -1)
    }

    return (
        
        <footer>
            <section>
            <h2>CONTADOR</h2>
            <h2>{numero}</h2>
            <button onClick={Adicionar}>ADICIONE</button>
            <button onClick={Remover}>REMOVA</button>
            </section>
        
        </footer>
    
    )
}

export default Footer

