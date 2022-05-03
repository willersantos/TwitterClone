import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const Span = styled.span`
    font-size: 15px;
    color: var(--gray);

    & + span {
        margin-left: 20px;
    }
`;