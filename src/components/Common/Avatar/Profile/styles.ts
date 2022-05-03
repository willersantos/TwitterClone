import styled from "styled-components";

export const Container = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    border-radius: 100%;
    background: var(--gray);

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
`;