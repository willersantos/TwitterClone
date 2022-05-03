import styled from 'styled-components';

interface ISpan {
    size?: 'small';
}

export const P = styled.p`
    font-size: 15px;
`;

export const Text = styled.p`
`;

export const Span = styled.span<ISpan>`
    font-size: ${(props) => props.size ? `15px` : `13px`};
    color: var(--gray);
`;

export const Title = styled.h1`
    font-size: 19px;
`;

export const Subtitle = styled.h2`
    font-size: 17px;
`;