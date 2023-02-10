import { Card } from './style'
import { Link } from 'react-router-dom'

export function CardDetails({title, image, sinopse, releaseDate}) {
    return (
        <Card>
            <img src={image} />
            <div>
                <h1>{title}</h1>
                <span><strong>Data de Lançamento: </strong>{releaseDate}</span>
                
                <p><strong>Sinopse: </strong>{sinopse}</p>
               
                <Link to={'/'} >
                    <button>Voltar</button>
                </Link>
            </div>
        </Card>
    )
}