import { styled } from 'dripsy';
import React from 'react';
import { View } from 'react-native';

const ViewStyled = styled(View)({
  flex: 1,
});

function InitScreen() {
  return <ViewStyled></ViewStyled>;
}
export default InitScreen;
