import React from 'react';
import { Text } from 'react-native';
import { StyledView } from '../../components/StyledView';

function PlayListScreen({ route }) {
  const { item } = route.params;
  console.log(route.params);
  return (
    <StyledView style={{ flex: 1 }}>
      <Text style={{ color: 'white' }}>Play list</Text>
      <Text style={{ color: 'white' }}>{item.text}</Text>
    </StyledView>
  );
}
export default PlayListScreen;
