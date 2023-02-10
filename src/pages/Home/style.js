import styled from 'styled-components'

export const Page = styled.main`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const MoovieList = styled.ul`
    
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
  
`