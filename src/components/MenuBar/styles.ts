import styled, { css } from 'styled-components';
import { Favorite, Email, Notifications, Home, Star, Person, ExitToApp } from '../../styles/icons';

export const Container = styled.div`
    display: none;
    
    @media(min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;

        padding: 15px 5px 20px;

        max-height: 100vh;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 0px;
        };
    }
`;

export const TweetButton = styled.div`
    > button {    
        @media (max-width: 1000px) {
            width: 35px;
        }

        > span {
            display: none;

            @media(min-width: 1000px) {
                display: inline;
            }
        }
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1000px) {
        align-items: flex-start;
    }
`;

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;

    > *, strong {
        font-size: 15px;
    }

    > *, div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const MenuIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;

    @media(min-width: 1000px) {
        align-items: flex-start;
    }
`;

const CssStyle = css`
    flex-shrink: 0;

    width: 30px;
    height: 30px;
`;

export const Logo = styled(Star)`
    width: 41px;
    height: 41px;

    margin-bottom: 5px;
    margin-left: -3px;
`;

export const HomeIcon = styled(Home)`
    ${CssStyle}
`;

export const NotificationIcon = styled(Notifications)`
    ${CssStyle}
`;

export const MessageIcon = styled(Email)`
    ${CssStyle}
`;

export const FavoriteIcon = styled(Favorite)`
    ${CssStyle}
`;

export const ProfileIcon = styled(Person)`
    ${CssStyle}
`;

export const ExitIcon = styled(ExitToApp)`
    ${CssStyle}
`;