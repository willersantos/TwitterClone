import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;

    padding: 8.25px 7.5px;
    outline: 0;
    margin-top: 16px;

    > strong {
        display: none;
    
        @media (min-width: 1000px) {
            display: inline;
            margin-left: 19px;

            font-size: 19px;
        }
    }

    &:hover {
        opacity: 0.70;
        cursor: pointer;
        background-color: var(--twitter-dark-hover);
    }
`;

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Subtitle = styled.p`
    display: none;

    @media (min-width: 1000px) {
        display: inline;
        margin-left: 19px;

        font-size: 12px;
        color: var(--gray);
    }
`;
