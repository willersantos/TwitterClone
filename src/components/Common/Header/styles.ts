import styled from "styled-components";
import { ArrowLeft } from "../../../styles/icons";

export const Container = styled.div`
    z-index: 2;
    position: sticky;
    top: 0;
    background: var(--primary);

    display: flex;
    align-items: center;
    text-align: left;

    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);

    > button {
        padding: 8px;
        border-radius: 50%;

        outline: 0;
        cursor: pointer;
        
        &:hower {
            background: var(--twitter-dark-hover);
        }
    }
`;

export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;

    fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
    margin-left: 17px;

    display: flex;
    flex-direction: column;

    > strong {
        font-size: 19px;
    }
    > span {
        font-size: 15px;
        color: var(--gray);
    }
`;