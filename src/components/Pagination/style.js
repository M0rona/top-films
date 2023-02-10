import styled from 'styled-components'

export const Pages = styled.nav`
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 130%;

    gap: 20px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 35px;
        height: 35px;

        text-decoration: none;
        color: white;        

        

        background: rgba(59, 130, 246, 0);
        border-radius: 50%;

        transition: all .3s ease;
    }

    a:hover {
        background: rgba(59, 130, 246, 0.5);
    }
`