import styled from 'styled-components'

export const Card = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }

    img {
        width: 180px;
        border-radius: 1rem;
    }

    span {
        text-align: center;
    }

`