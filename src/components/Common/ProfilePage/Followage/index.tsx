import React from 'react';

import * as S from './styles';

interface IFollowage {
    followers: number;
    following: number;
}

const Followage: React.FC<IFollowage> = ({followers, following}) => {
  return (
      <S.Container>
            <S.Span>
                seguindo <strong> {following >= 1000 ? following >= 1000000 ?
                    Number(following/1000000).toFixed(0) + 'M' :
                    Number(following/1000).toFixed(0) + 'k' :
                    following}
                </strong>
            </S.Span>
            <S.Span>
                <strong> {followers >= 1000 ? followers >= 1000000 ?
                    Number(followers/1000000).toFixed(0) + 'M' :
                    Number(followers/1000).toFixed(0) + 'k' :
                    followers} </strong> seguidores
            </S.Span>
      </S.Container>
  );
}

export default Followage;