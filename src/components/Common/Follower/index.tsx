import React from 'react';

import * as S from './styles';

interface IFollower {
    name: string;
    nickname: string;
    source: string;
}

const Follower: React.FC<IFollower> = ({name, nickname, source}) => {
  function follow(nickname: string) {
      console.log('seguindo: ' + nickname);
  }

  return (
      <S.Container>
          <S.Row>
            <S.Avatar src={source} />
          
            <S.Column>
                <strong>{name}</strong>
                <span>{nickname}</span>
            </S.Column>
          </S.Row>
          <S.FollowButton
                outline
                width={'5.5rem'}
                execute={follow(nickname)}
                text={'Seguir'}
            />
      </S.Container>
  );
}

export default Follower;