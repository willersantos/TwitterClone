import React from 'react';

import {Item, Title} from './styles';

interface IListSpace {
    title: string;
    elements: React.ReactElement[];
}

const ListSpace: React.FC<IListSpace> = ({
    title,
    elements
}) => {
  return (
      <>
        <Item>
            <Title>{title}</Title>
        </Item>

        {elements.map((element, index) => {
            return (
            <Item key={index}>{element}</Item>
        )})}
    </>
  );
}

export default ListSpace;