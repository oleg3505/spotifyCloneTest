import { styled } from 'dripsy';
import React from 'react';
import { Text, View } from 'react-native';
import { Container } from '../../components/Container';

const TextStyled = styled(Text)({
  color: 'white',
});

function SearchScreen() {
  return (
    <Container>
      <TextStyled>Search</TextStyled>
    </Container>
  );
}
export default SearchScreen;
