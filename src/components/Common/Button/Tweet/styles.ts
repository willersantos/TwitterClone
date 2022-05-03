import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background: var(--primary);
    color: var(--twitter);

    border-bottom: 1px solid var(--twitter);

    margin-top: 10px;
    margin-bottom: 15px;

    padding: 10px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    &:hover {
        background: var(--twitter-dark-hover);
    }

    @media(max-width: 500px) {
        display: none;
    }
`;
