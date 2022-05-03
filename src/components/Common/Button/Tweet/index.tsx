import React from 'react';

import * as S from './styles';

interface IButton {
    text: string;
    execute: void;
}

const TweetButton: React.FC<IButton> = ({text, execute, ...rest}) => {
  return (
    <S.ButtonStyle onClick={() => execute}>
        {text}
    </S.ButtonStyle>
  );
}

export default TweetButton;