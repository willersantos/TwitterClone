import styled, { css } from "styled-components";
import { Home, Search, Notifications, Email } from "../../../styles/icons";
import { Row } from "../../Structure/structures";

export const Container = styled(Row)`
    justify-content: space-between;
    background: var(--primary);

    position: fixed;
    bottom: 0;
    left: 0;
    padding: 8px min(46px, max(10vw, 10px));

    z-index: 2;

    width: 100%;
    border-top: 1px solid var(--outline);

    @media(min-width: 500px) {
        display: none;
    }
`;

const iconStyle = css`
    width: 31px;
    height: 31px;

    cursor: pointer;
    fill: var(--gray);

    &:hover,
    &.active {
        fill: var(--twitter);
    }
`;

export const HomeIcon = styled(Home)`
    ${iconStyle}
`;

export const SearchIcon = styled(Search)`
    ${iconStyle}
`;

export const BellIcon = styled(Notifications)`
    ${iconStyle}
`;

export const EmailIcon = styled(Email)`
    ${iconStyle}
`;
