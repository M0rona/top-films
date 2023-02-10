import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { CardDetails } from "../../components/cardDetails";
import { Container } from './style'


export function Details() {

    const { id } = useParams()

    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=398d73e3b61c4c9d253f51c8fc0b9988&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {

                const {title, poster_path, overview, release_date} = data

                const movie = {
                    id,
                    title,
                    sinopse:overview,
                    image: `https://image.tmdb.org/t/p/w500${poster_path}`,
                    releaseDate:release_date
                }

                setMovie(movie)
            })
    }, [id])

    return (
        <Container>
            <CardDetails 
                image={movie.image} 
                title={movie.title}
                sinopse={movie.sinopse}
                releaseDate={movie.releaseDate}
            />
        </Container>
        
    )
}