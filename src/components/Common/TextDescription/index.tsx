import React from 'react';

import * as S from './styles';

interface ITextDescription {
    description: string;
    refLink: string;
}

const TextDescription: React.FC<ITextDescription> = ({description, refLink}) => {
  const reference = description.split('@').length == 2 ? 
    description.split('@')[1].split(' ')[0] : null;

  const afterReference = reference==null ? null : description.split('@')[1].split(' ')[1];
  const beforeReference = reference==null ? null : description.split('@')[0];

  return (
    <S.Container>
        {description.length === 0 ?
            (<p>Sem descrição</p>) :
            (
                <>
                    {reference==null ?
                        <p>{description}</p> :
                        <>
                            <p>{beforeReference}</p>
                            <a href={refLink}>@{reference}</a>
                            <p>{afterReference}</p>
                        </>
                    }
                </>
            )
        }
    </S.Container>
  );
}

export default TextDescription;