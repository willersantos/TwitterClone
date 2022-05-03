import React from 'react';

import * as S from './styles';

interface ILocalAndBirthday {
    place: string;
    birthday: string;
}

const LocalAndBirthday: React.FC<ILocalAndBirthday> = ({place, birthday}) => {
  return (
    <S.Container>
        <ul>
            <li>
                <S.LocationIcon />
                <a href={'https://www.google.com.br/maps/place/' + place}>
                    {place}
                </a>
            </li>
            <li>
                <S.CakeIcon />
                Nascido(a) em {birthday}
            </li>
        </ul>
    </S.Container>
  );
}

export default LocalAndBirthday;