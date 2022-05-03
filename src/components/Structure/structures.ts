import styled from 'styled-components';

interface IRow {
    alignItems?: 'baseline' | 'stretch' | 'flex-start' | 'flex-enter';
    justifyContent?: 'baseline' | 'end' | 'flex-start' | 'flex-enter' | 'right' | 'left' | 'space-between';
    backgroundColor?: string;
}

interface ISpace {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
}

export const Row = styled.div<IRow>`
    display: flex;

    align-items: ${(props) => props.alignItems ? props.alignItems : `center`};
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : `center`};

    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : `unset`};
`;

export const Column = styled(Row)`
    flex-direction: column;
`;

export const Space = styled(Row)<ISpace>`
    margin-top: ${(props) => props.top ? `${props.top} px` : `0px`};
    margin-left: ${(props) => props.left ? `${props.left} px` : `0px`};
    margin-right: ${(props) => props.right ? `${props.right} px` : `0px`};
    margin-bottom: ${(props) => props.bottom ? `${props.bottom} px` : `0px`};
`;