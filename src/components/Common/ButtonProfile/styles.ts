import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;

    padding: 8.25px 15px;
    margin-top: 16px;

    &:hover {
        opacity: 0.70;
        cursor: pointer;
        background-color: var(--twitter-dark-hover);
    }
`;

export const Texts = styled.div`
    display: inline;
    flex-direction: column;
    align-items: flex-start;
    overflow: 0;
`;

export const Title = styled.strong`
    display: none;
    
    @media (min-width: 1000px) {
        display: flex;
        overflow: 0;

        font-size: 13px;
    }
`;

export const Subtitle = styled.p`
    display: none;

    @media (min-width: 1000px) {
        display: inline;

        font-size: 13px;
        color: var(--gray);
    }
`;