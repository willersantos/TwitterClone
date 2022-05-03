import React, { useState } from 'react';
import { Row } from '../../Structure/structures';

interface IStatus {
    icon: React.ReactElement;
    numberStatus: number;
    colorActive: string;
}

const Status: React.FC<IStatus> = ({
  icon,
  numberStatus,
  colorActive
}) => {
  const [active, setActive] = useState(false);

  return (
    <Row style={{alignItems: 'center'}} onClick={() => {setActive(!active)}}>
        {icon}
        {active ?
          <p style={{color: colorActive}}>{numberStatus+1}</p> :
          <p style={{color: 'var(--gray)'}}>{numberStatus}</p>
        }
    </Row>
  );
}

export default Status;