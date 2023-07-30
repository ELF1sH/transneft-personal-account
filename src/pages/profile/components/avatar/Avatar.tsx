import React from 'react';
import styled from 'styled-components';

import { NoPictureDummy } from 'components/atoms/noPictureDummy/NoPictureDummy';

import { useUserContext } from 'modules/providers/userProvider/context';

const Avatar: React.FC = () => {
  const { profile } = useUserContext();

  return (
    <ProfilePageAvatarWrapper>
      {
        profile?.avatar
          ? <ProfilePageAvatar src={profile.avatar} />
          : <NoPictureDummy fontSize="146px" />
      }
    </ProfilePageAvatarWrapper>
  );
};

const ProfilePageAvatarWrapper = styled.div`
  width: min(100%, 324px);
  height: 486px;
  flex-shrink: 0;
`;

const ProfilePageAvatar = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

export default Avatar;
