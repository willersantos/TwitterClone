import React, { useState } from 'react';
import TextDescription from '../../TextDescription';
import Followage from '../Followage';
import LocalAndBirthday from '../LocalAndBirthday';

import * as S from './styles';

const ProfileData: React.FC = () => {
  const [name, setName] = useState('Nome Sobrenome');
  const [tagName, setTagName] = useState('@sobrenome_nome');

  function editProfile() {
    console.log('Ok');
  }

  return (
      <S.Container>
            <S.Edit>
                <S.EditButton
                    execute={editProfile()}
                    outline
                    text={'Editar Perfil'}
                    width={'150px'}
                />
            </S.Edit>

            <S.Name>{name}</S.Name>
            <S.Tag>{tagName}</S.Tag>

            <TextDescription
                refLink={'https://btgpactual.com.br'}
                description={'Developer at @BTG_Pactual nowadays'}
            />

            <LocalAndBirthday
                place={'Bahia, Brasil'}
                birthday={'11 de Setembro de 2001'}
            />

            <Followage followers={6000000} following={2000} />
      </S.Container>
  );
}

export default ProfileData;