import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
        <button>
            <S.BackIcon />
        </button>

        <S.ProfileInfo>
            <strong>Nome</strong> {/*name*/}
            <span>XX tweets</span> {/* {number_of_tweets} tweets*/}
        </S.ProfileInfo>
    </S.Container>
  );
}

export default Header;