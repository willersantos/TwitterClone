import styled from "styled-components";

export const Container = styled.div`
    width: min(610px, 100%);

    // Responsividade
    @media (min-width: 500px) {
        border-left: 1px solid var(--gray);
        border-right: 1px solid var(--gray);
    }
`;