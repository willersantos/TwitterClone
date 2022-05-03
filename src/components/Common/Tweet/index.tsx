import React from 'react';
import AvatarPost from '../Avatar/Post';
import PostIcons from '../PostIcons';
import Header from './Header';

import * as S from './styles';

export interface ITweet {
    avatarSource: string;
    photoSource: string;
    author: string;
    tagAuthor: string;
    time: string;
    description: string;
    numberComents: number;
    numberLikes: number;
    numberStars: number;
    isRetweet: boolean;
}

const Tweet: React.FC<ITweet> = ({
    avatarSource,
    photoSource,
    author,
    tagAuthor,
    time,
    description,
    numberComents,
    numberLikes,
    numberStars,
    isRetweet }) => {
  return (
    <S.Container>
        {isRetweet ? (
            <S.Retweet>
                <S.RetweetIcon />
                <p>Você retweetou</p>
            </S.Retweet>
        ) : (<></>)}

        <S.Body>
            <AvatarPost source={avatarSource} />

            <S.Content>
                <Header
                    author={author}
                    tagAuthor={tagAuthor}
                    time={time}
                />

                <S.Description>
                    {description}
                </S.Description>

                <S.ImagePost src={photoSource} />

                <PostIcons
                    numberComents={numberComents}
                    numberLikes={numberLikes}
                    numberStars={numberStars}
                />
            </S.Content>
        </S.Body>
    </S.Container>
  );
}

export default Tweet;