import styled from 'styled-components';

interface IButtonStyle {
    outline?: boolean;
    width: string;
}

export const ButtonStyle = styled.button<IButtonStyle>`
    justify-content: center;
    align-items: center;

    background: ${(props) => props.outline ? `transparent` : `var(--twitter)`};

    border: ${(props) => props.outline ? `1px solid var(--twitter)` : `none`};

    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    width: ${(props) => props.width};

    > span {
        color: ${(props) => props.outline ? `var(--twitter)` : `var(--white)`};
        
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    &:hover {
        background: ${(props) => props.outline ?
            `var(--twitter-dark-hover)` :
            `var(--twitter-light-hover)`
        };
    }
`;
