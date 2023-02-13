import { Page, MoovieList, Header } from './style'
import { CardFilm } from '../../components/CardFilm'
import { Pagination } from '../../components/Pagination';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export function Home() {

    const [movies, setMovies] = useState([]);

    let { page } = useParams();

    if (!page) {
        page = 1;
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=398d73e3b61c4c9d253f51c8fc0b9988&language=pt-BR&page=${page}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [page])

    const [busca, setBusca] = useState('');

    useEffect(() => {

        if(busca) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=398d73e3b61c4c9d253f51c8fc0b9988&language=pt-BR&query=${busca}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
        }
        
    }, [busca])

    return (
        <Page>
            <Header>
                <h1>Top Filmes 2023</h1>
                <input type="text" 
                name="search" 
                placeholder="Pesquisar Filme"
                onChange={(ev) => setBusca(ev.target.value)}
                />
            </Header>
            
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

            <Pagination page={page}/>
        </Page>
    )
}