import { styled } from '@dripsy/core';
import React from 'react';
import { FlatList } from 'react-native';
import Section from './Section';

const Container = styled(FlatList)({
  flex: 1,
});

function CategoriesList({ data }) {
  // console.log(data);
  return (
    <Container
      renderItem={({ item }) => <Section item={item} />}
      keyExtractor={(item) => item.id}
      data={data}
      // showsVerticalScrollIndicator={false}
    />
  );
}

export default CategoriesList;
