import { styled } from 'dripsy';
import React from 'react';
import { View } from 'react-native';

const Container = styled(View)({
  flex: 1,
  bg: '#111111',
});

function InitScreen() {
  return <Container></Container>;
}
export default InitScreen;
