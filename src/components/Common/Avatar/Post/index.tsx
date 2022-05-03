import React from 'react';

import * as S from './styles';

interface IAvatarPost {
    source: string;
}

const AvatarPost: React.FC<IAvatarPost> = ({source}) => {
  return (
    <S.Container src={source} />
  );
}

export default AvatarPost;