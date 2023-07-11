import React from 'react';
import styled from 'styled-components';

const Avatar: React.FC = () => (
  <ProfilePageAvatarWrapper>
    <ProfilePageAvatar src="https://fakeimg.pl/1000x2000" />
  </ProfilePageAvatarWrapper>
);

const ProfilePageAvatarWrapper = styled.div`
  width: 324px;
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
