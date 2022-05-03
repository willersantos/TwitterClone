import React from 'react';
import BottomMenu from '../Common/BottomMenu';
import Header from '../Common/Header';
import ProfilePage from '../Common/ProfilePage';

import * as S from './styles';

const Main: React.FC = () => {
  return (
  <S.Container>
    <Header />
    <ProfilePage />
    <BottomMenu />
  </S.Container>
  );
}

export default Main;