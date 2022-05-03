import React from 'react';
import { CSSProperties } from 'styled-components';

import * as S from './styles';

interface IButton {
    outline?: boolean;
    text: string;
    execute: void;
    width: string;
    style?: CSSProperties;
}

const Button: React.FC<IButton> = ({text, outline, execute, width, style, ...rest}) => {
  return (
    <S.ButtonStyle style={style} width={width} outline={outline} onClick={() => execute}>
        <span>{text}</span> {/*Voltar a config inicial*/}
    </S.ButtonStyle>
  );
}

export default Button;