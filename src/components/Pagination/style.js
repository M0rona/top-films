import styled from 'styled-components'

export const Pages = styled.nav`
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 130%;

    cursor: default;

    gap: 20px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
        height: 50px;

        text-decoration: none;
        color: white;        

        

        background: rgba(59, 130, 246, 0);
        border-radius: 50%;

        transition: all .3s ease;
    }

    a:hover {
        background: rgba(59, 130, 246, 0.5);
    }

    .activePage {
        background: rgba(59, 130, 246, 1);
    }

    .activePage:hover {
        background: rgba(59, 130, 246, 1);
    }

    .arrow {
        width: auto;
        height: auto;

        display: flex;
        align-items: center;
    }

    .arrow:first-of-type  {
       rotate: 180deg;
    }

    .arrow:hover {
        background: none;
    }
`