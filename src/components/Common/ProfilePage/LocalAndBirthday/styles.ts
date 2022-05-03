import styled, { css } from "styled-components";
import { Cake, LocationOn } from "../../../../styles/icons";

const IconSyles = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`;

export const Container = styled.div`
    > ul {
        list-style: none;

        margin-top: 10px;
        margin-bottom: 10px;

        > li {
            display: flex;
            align-items: center;

            font-size: 15px;
            color: var(--gray);

            > a {
                text-decoration: none;
                font-size: 15px;
                color: var(--gray);

                &:hover {
                    color: var(--white);
                }
            }

            > svg {
                fill: var(--gray);
                margin-right: 5px;
            }
        }
    }
`;

export const LocationIcon = styled(LocationOn)`
    ${IconSyles}
`;

export const CakeIcon = styled(Cake)`
    ${IconSyles}
`;