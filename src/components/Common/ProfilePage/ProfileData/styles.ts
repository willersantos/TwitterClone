import styled from "styled-components";
import Button from "../../Button/Basic";

export const Container = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;

    position: relative;
`;

export const Name = styled.h1`
    font-weight: bold;
    font-size: 19px;
`;

export const Tag = styled.h2`
    font-weight: normal;
    font-size: 15px;
    opacity: 0.70;

    color: var(--gray);

    &:hover {
        color: var(--twitter);
        cursor: pointer;
    }
`;

export const EditButton = styled(Button)`
`;

export const Edit = styled.div`
    position: absolute;
    top: 2vw;
    right: 7px;

    padding: 4px 16px;
    font-size: 13px;

    @media(min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
`;