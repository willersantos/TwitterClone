import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > p {
        font-size: 15px;
        margin-top: 11px;
    }

    > a {
        margin: 10px 5px 0 5px;
        text-decoration: none;
        color: var(--twitter);

        &:hover {
            color: var(--gray);
        }
    }
`;