import styled, { css } from "styled-components";
import { Favorite, Chat, Star } from "../../../styles/icons";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;

    @media(min-width: 400px) {
        width: 63%;
        margin-left: 18.5%;
    }

    > div {
        cursor: pointer;

        &:hover {
            opacity: 0.70;
        }
    }
`;

const CssStyles = css`
    width: 20px;
    height: 20px;

    margin-right: 5px;
    font-size: 13px;
`;

const CssReact = css`
    &:nth-child(1) {
        &, > svg path {
            color: var(--gray);
        }

        &:hover, &.active {
            > svg path, path {
                fill: var(--twitter);
            }
        }
    }

    &:nth-child(2) {
        color: var(--gray);

        > svg {
            fill: var(--gray);
        }

        &:hover, &.active {
            color: var(--like);

            > svg {
                fill: var(--like);
            }
        }
    }

    &:nth-child(3) {
        &, > svg {
            color: var(--gray);
        }

        &:hover,
        &.active {
            color: var(--retweet);

            > svg {
                fill: var(--retweet);
            }
        }
    }
`;

export const React = styled.div`
    ${CssReact};
`;

export const ComentIcon = styled(Chat)`
    ${CssStyles};
`;

export const LikeIcon = styled(Favorite)`
    ${CssStyles};
`;

export const StarIcon = styled(Star)`
    ${CssStyles};
`;