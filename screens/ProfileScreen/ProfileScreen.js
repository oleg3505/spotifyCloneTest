import { useNavigation } from '@react-navigation/native';
import { styled } from 'dripsy';

import React from 'react';
import { Alert, Image, Text } from 'react-native';
import Api from '../../api';
import { StyledView } from '../../components/StyledView';
import { SubmitButton } from '../../components/SubmitButton';
import { screens } from '../../navigation/screens';

const profile = {
  fullName: 'Oleh Kondratiuk',
  imgUri:
    'https://images.freeimages.com/images/large-previews/773/koldalen-4-1384902.jpg',
};

const TextInProfile = styled(Text)({
  color: 'white',
  fontSize: 24,
  margin: 10,
});

const LogOutText = styled(Text)({
  width: 100,
  textAlign: 'center',
});

function ProfileScreen() {
  const nav = useNavigation();

  function logOut() {
    Alert.alert('Log out', 'Logout', [
      {
        text: 'ok',
        onPress: () => {
          Api.Auth.logOut();
          nav.navigate(screens.Auth);
        },
      },
      { text: 'Cansel', style: 'cancel' },
    ]);
  }

  return (
    <StyledView contentContainerStyle={{ alignItems: 'center' }}>
      <Image
        source={{ uri: profile.imgUri }}
        style={{ width: 200, height: 200, borderRadius: 100, margin: 20 }}
      />
      <TextInProfile>{profile.fullName}</TextInProfile>
      <SubmitButton onPress={logOut}>
        <LogOutText>Log out</LogOutText>
      </SubmitButton>
    </StyledView>
  );
}
export default ProfileScreen;
