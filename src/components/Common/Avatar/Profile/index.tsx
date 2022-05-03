import React from 'react';

import * as S from './styles';

interface IAvatar {
    source: string;
}

const Avatar: React.FC<IAvatar> = ({source}) => {
  return (
    <S.Container>
        <img src={source} />
    </S.Container>
  );
}

export default Avatar;