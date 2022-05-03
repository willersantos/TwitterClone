import React from 'react';
import Avatar from '../Avatar/Profile';
import TweetButton from '../Button/Tweet';
import Feed from '../Feed';
import ProfileData from './ProfileData';
import { tweets } from './data';

import * as S from './styles';

const ProfilePage: React.FC = () => {
  function newTweet() {
      console.log('ok');
  }

  return (
    <S.Container>
        <S.Banner>
            <Avatar source={''} />
        </S.Banner>

        <ProfileData/>

        <TweetButton text={'Tweet'} execute={newTweet()} />
          
        <Feed tweets={tweets} />
      </S.Container>
  );
}

export default ProfilePage;