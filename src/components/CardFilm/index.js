import { Link } from 'react-router-dom'
import { Card } from './style'

export function CardFilm({id, title, image_url}) {
    return (
        <Card>
            <Link to={`details/${id}`}>
                <img src={image_url}/>
            </Link>
            
            <span>{title}</span>
        </Card>
    )
}