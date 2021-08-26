import { styled } from 'dripsy';
import React from 'react';
import { View } from 'react-native';

const Container = styled(View)({
  flex: 1,
  backgroundColor: '#111111',
});

function InitScreen() {
  return <Container />;
}
export default InitScreen;
