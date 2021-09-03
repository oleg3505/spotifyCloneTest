import { useNavigation } from '@react-navigation/native';
import { styled } from 'dripsy';
import React from 'react';
import { useEffect } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import Api from '../../api';
import { SubmitButton } from '../../components/SubmitButton';
import { screens } from '../../navigation/screens';
import { createStore } from '../../stores/createStore';

const profile = {
  fullName: 'Oleh Kondratiuk',
  imgUri:
    'https://images.freeimages.com/images/large-previews/773/koldalen-4-1384902.jpg',
};

const FullName = styled(Text)({
  color: 'white',
  fontSize: 24,
  margin: 10,
});

const LogOut = styled(Text)({
  width: 100,
  textAlign: 'center',
});

const ProfileImg = styled(Image)({
  width: 200,
  height: 200,
  borderRadius: 100,
  margin: 20,
});

const Container = styled(View)({
  flex: 1,
  bg: 'primary',
  alignItems: 'center',
});

const store = createStore();
function ProfileScreen() {
  useEffect(() => {
    // store.viewer.getUser.run();
    // console.log(store.viewer.user);
  }, []);

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
    <Container>
      <ProfileImg source={{ uri: profile.imgUri }} />
      <FullName>{profile.fullName}</FullName>
      <SubmitButton onPress={logOut}>
        <LogOut>Log out</LogOut>
      </SubmitButton>
    </Container>
  );
}
export default ProfileScreen;
