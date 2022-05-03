import React from 'react';
import Status from '../Status';

import * as S from './styles';

interface IPostIcons {
    numberComents: number;
    numberLikes: number;
    numberStars: number;
}

const PostIcons: React.FC<IPostIcons> = ({numberComents, numberLikes, numberStars}) => {
  return (
    <S.Container>
        <S.React>
            <Status
                icon={(<S.ComentIcon/>)}
                numberStatus={numberComents}
                colorActive={'var(--twitter)'}
            />
        </S.React>
        <S.React>
            <Status
                icon={(<S.LikeIcon/>)}
                numberStatus={numberLikes}
                colorActive={'var(--like)'}
            />
        </S.React>
        <S.React>
            <Status
                icon={(<S.StarIcon/>)}
                numberStatus={numberStars}
                colorActive={'var(--retweet)'}
            />
        </S.React>
    </S.Container>
  )
}

export default PostIcons;