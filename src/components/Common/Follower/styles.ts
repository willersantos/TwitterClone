import styled from 'styled-components';
import Button from '../Button/Basic';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Avatar = styled.img`
    width: 49px;
    height: 49px;

    background: var(--gray);

    border-radius: 100%;
    margin-right: 10px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > strong {
        font-size: 14px;
    }

    > span {
        font-size: 14px;
        color: var(--gray);
    }
`;

export const FollowButton = styled(Button)`

`;