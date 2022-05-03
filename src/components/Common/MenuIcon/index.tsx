import React from 'react';

import * as S from './styles';

interface IMenuIcon {
    icon: React.ReactElement;
    name: string;
    active: boolean;
    onClick: () => void;
}

const MenuIcon: React.FC<IMenuIcon> = ({
  icon,
  name,
  active,
  onClick
}) => {
  return (
    <S.Container onClick={onClick} >
        {icon}
        {active ?
          <strong style={{color: 'var(--twitter)'}}>{name}</strong> :
          <strong style={{color: 'var(--white)'}}>{name}</strong>
        }
    </S.Container>
  );
}

export default MenuIcon;