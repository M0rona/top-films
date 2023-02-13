import styled from 'styled-components'

export const Page = styled.main`
    h1 {
        text-align: center;
    }
`

export const MoovieList = styled.ul`
    
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
  
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;

    input {
        height: 40px;
        width: 25%;

        border: none;
        border-radius: 8px;
        outline: 0;

        padding: 10px 20px;

        font-size: 20px;
        background: rgba(255, 255,  255, 0.3);

        color: white;
    }

    input::placeholder {
        color: white;
        font-weight: 300;
    }
`