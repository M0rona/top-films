import { Card } from './style'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

export function CardDetails({title, image, sinopse, releaseDate}) {
    const [botaoClicado, setBotaoClicado] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (botaoClicado) {
            navigate(-1); 
        }
    },[botaoClicado, navigate])

    function handleClick() {
        setBotaoClicado(true);
    }
       
    return (
        <Card>
            <img src={image} />
            <div>
                <h1>{title}</h1>
                <span><strong>Data de Lançamento: </strong>{releaseDate}</span>
                
                <p><strong>Sinopse: </strong>{sinopse}</p>
               
               
                <button onClick={handleClick} >Voltar</button>
            </div>
        </Card>
    )
}