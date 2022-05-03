import React from 'react';

import * as S from './styles';

interface IHeader {
    author: string;
    tagAuthor: string;
    time: string;
}

const Header: React.FC<IHeader> = ({
    author,
    tagAuthor,
    time
}) => {
  return (
    <S.Container>
        <strong>{author}</strong>
        <span>{tagAuthor}</span>
        <S.Dot />
        <time>{time}</time>
    </S.Container>
  )
}

export default Header;