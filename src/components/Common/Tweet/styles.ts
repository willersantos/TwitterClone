import styled from "styled-components";
import { ArrowCircleUp } from "../../../styles/icons";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    border-bottom: 1px solid var(--outline);

    max-width: 100%;

    padding-left: 3%;
    padding-right: 3%;
`;

export const RetweetIcon = styled(ArrowCircleUp)`
    width: 20px;
    height: 20px;

    margin-left: 0.6rem;
`;

export const Retweet = styled.div`
    display: flex;
    align-items: center;

    font-size: 13px;
    color: var(--gray);
`;

export const Body = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 10px;

    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    margin-right: 2%;
`;

export const Description = styled.p`
    font-size: 13px;
    margin-top: 4px;
`;

export const ImagePost = styled.img`
    margin-top: 12px;
    margin-bottom: 6px;

    width: 100%;
    height: min(285px, max(175px, 41vw));
    border-radius: 5%;

    background-color: var(--gray);

    cursor: pointer;

    &:hover {
        opacity: 0.70;
    }
`;