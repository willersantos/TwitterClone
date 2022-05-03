import React from 'react';
import Tweet, { ITweet } from '../Tweet';

import * as S from './styles';

interface IFeed {
    tweets: ITweet[];
}

const Feed: React.FC<IFeed> = ({tweets}) => {
  return (
      <S.Container>
          <S.Tweets>
              {tweets.map((tweet) => {
                  return(
                    <Tweet
                        avatarSource={tweet.avatarSource}
                        photoSource={tweet.photoSource}
                        author={tweet.author}
                        tagAuthor={tweet.tagAuthor}
                        time={tweet.time}
                        description={tweet.description}
                        numberComents={tweet.numberComents}
                        numberLikes={tweet.numberLikes}
                        numberStars={tweet.numberStars}
                        isRetweet={tweet.isRetweet}
                    />
                  )
              })}
          </S.Tweets>
      </S.Container>
  );
}

export default Feed;