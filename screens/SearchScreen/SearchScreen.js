import { styled } from 'dripsy';
import React from 'react';
import { Text, View } from 'react-native';
import { StyledView } from '../../components/StyledView';

const TextStyled = styled(Text)({
  color: 'white',
});

function SearchScreen() {
  return (
    <StyledView>
      <TextStyled>Search</TextStyled>
    </StyledView>
  );
}
export default SearchScreen;
