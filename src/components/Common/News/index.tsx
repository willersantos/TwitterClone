import React from 'react';

import * as S from './styles';

interface INews {
    content: string;
    description: string;
}

const News: React.FC<INews> = ({content, description}) => {
  return (
      <S.Container>
          <span>{content}</span>
          <strong>{description}</strong>
      </S.Container>
  );
}

export default News;