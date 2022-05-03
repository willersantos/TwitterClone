import React from 'react';

import * as S from './styles';

interface IButtonProfile {
    icon: React.ReactElement;
    name: string;
    subtitle: string;
    onClick: () => void;
}

const ButtonProfile: React.FC<IButtonProfile> = ({
    icon,
    name,
    subtitle,
    onClick
}) => {
    return(
        <S.Container onClick={onClick} >
            {icon}
            <S.Texts>
                <S.Title style={{color: 'var(--white)'}}>{name}</S.Title>
                <S.Subtitle>{subtitle}</S.Subtitle>
            </S.Texts>
        </S.Container>
    );
}

export default ButtonProfile;