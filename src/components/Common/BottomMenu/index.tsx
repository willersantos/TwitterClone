import React, { useState } from 'react';

import * as S from './styles';

const BottomMenu: React.FC = () => {
  const [listIconActive, setListIconActive] = useState([
    'active', 'desactive', 'desactive', 'desactive'
  ]);

  function activeIcon(position: number) {
    let list = ['desactive', 'desactive', 'desactive', 'desactive'];
    list[position] = 'active';
    setListIconActive(list);
  }

  return (
    <S.Container>
        <S.HomeIcon className={listIconActive[0]} onClick={() => activeIcon(0)} />
        <S.SearchIcon className={listIconActive[1]} onClick={() => activeIcon(1)} />
        <S.BellIcon className={listIconActive[2]} onClick={() => activeIcon(2)} />
        <S.EmailIcon className={listIconActive[3]} onClick={() => activeIcon(3)} />
    </S.Container>
  );
}

export default BottomMenu;