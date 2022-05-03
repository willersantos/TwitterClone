import React, { useState } from 'react';
import AvatarPost from '../Common/Avatar/Post';
import MenuIcon from '../Common/MenuIcon';
import Button from '../Common/Button/Basic';

import * as S from './styles'
import ButtonProfile from '../Common/ButtonProfile';

const MenuBar: React.FC = () => {
    const [listIconActive, setListIconAcitve] = useState([
        true, false, false, false, false 
    ]);

    function setActiveIcon(index: number) {
        let list = [false, false, false, false, false];
        list[index] = true;
        setListIconAcitve(list);
    }

    function newTweet() {
        console.log('new tweet');
    }

    return (
        <S.Container>
            <S.Top>
                <S.Logo />

                <S.MenuIcons>
                    <MenuIcon
                        icon={(<S.HomeIcon style={{color: listIconActive[0] ? 'var(--twitter)' : 'var(--white)'}} />)}
                        name={'Home'}
                        active={listIconActive[0]}
                        onClick={() => {setActiveIcon(0)}}
                    />
                    <MenuIcon
                        icon={(<S.NotificationIcon style={{color: listIconActive[1] ? 'var(--twitter)' : 'var(--white)'}} />)}
                        name={'Notifications'}
                        active={listIconActive[1]}
                        onClick={() => {setActiveIcon(1)}}
                    />
                    <MenuIcon
                        icon={(<S.MessageIcon style={{color: listIconActive[2] ? 'var(--twitter)' : 'var(--white)'}} />)}
                        name={'Messages'}
                        active={listIconActive[2]}
                        onClick={() => {setActiveIcon(2)}}
                    />
                    <MenuIcon
                        icon={(<S.FavoriteIcon style={{color: listIconActive[3] ? 'var(--twitter)' : 'var(--white)'}} />)}
                        name={'Favorites'}
                        active={listIconActive[3]}
                        onClick={() => {setActiveIcon(3)}}
                    />
                    <MenuIcon
                        icon={(<S.ProfileIcon style={{color: listIconActive[4] ? 'var(--twitter)' : 'var(--white)'}} />)}
                        name={'Profile'}
                        active={listIconActive[4]}
                        onClick={() => {setActiveIcon(4)}}
                    />
                    <S.TweetButton>
                        <Button
                            execute={newTweet()}
                            text={'Tweetar'}
                            width={'10rem'}
                            style={{
                                marginTop: '35px',
                            }}
                        />
                    </S.TweetButton>
                </S.MenuIcons>
            </S.Top>

            <S.Bottom>
                <ButtonProfile
                    icon={(
                        <AvatarPost
                            source={'https://www.lance.com.br/files/article_main/uploads/2019/01/18/5c420b59a5237.jpeg'}
                        />
                    )}
                    name={'Nome Sobrenome'}
                    subtitle={'@tagname'}
                    onClick={() => {console.log('profile')}}
                />

                <MenuIcon
                    icon={(<S.ExitIcon style={{color: 'var(--gray)'}} />)}
                    name={'LogOut'}
                    active={false}
                    onClick={() => {console.log('saída')}}
                />
            </S.Bottom>
        </S.Container>
    );
}

export default MenuBar;