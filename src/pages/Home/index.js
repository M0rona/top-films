import { Page, MoovieList } from './style'
import { CardFilm } from '../../components/CardFilm'
import { Pagination } from '../../components/Pagination';
import { useState, useEffect } from 'react'

export function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=398d73e3b61c4c9d253f51c8fc0b9988&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    useEffect(() => {
        console.log("Executou o useEffect");
    }, [movies])

    return (
        <Page>
            <h1>Top Filmes 2023</h1>
            <MoovieList>
                {
                    
                    movies.map(movie => {
                        return (
                            <CardFilm 
                            key={movie.id} 
                            id={movie.id}
                            title={movie.title} 
                            image_url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        )
                    })
                }
                
            </MoovieList>

            <Pagination />
        </Page>
    )
}