import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 300px;
        border-radius: 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 30px;

        padding: 3rem;

        max-width: 50%;

        h1 {
            font-size: 2.5rem;
        }

        strong {
            font-size: 1.3rem;
        }

        p {
            line-height: 130%;
        }

        button {
            padding: 1rem;
            width: 100%;

            cursor: pointer;

            border: none;
            border-radius: 8px;

            font-size: 1.3rem;
            font-weight: 600;

            background-color: #3b82f6;
            color: white;
            transition: all .3s ease;
        }

        button:hover {
            filter: brightness(0.8);
        }
    }
`