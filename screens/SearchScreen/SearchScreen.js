import { styled } from 'dripsy';
import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, FlatList } from 'react-native';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { SubmitButton } from '../../components/SubmitButton';
import { useStore } from '../../stores/createStore';
import { SongComponent } from '../PlayListScreen/PlayListScreen';

const EmptyComponent = styled(Text)({
  color: 'red',
  textAlign: 'center',
});

const InputContainer = styled(TextInput)({
  height: 40,
  margin: 1,
  padding: 2,
  bg: 'inputBG',
  borderRadius: 5,
  marginTop: 25,
});

const SearchingItemsList = styled(FlatList)({
  flexGrow: 1,
  bg: 'primary',
});

function SearchScreen() {
  const store = useStore();
  const [searchData, setSearchData] = useState('');
  const arrData = [...new Set(store.search.asArray)];

  async function find(data) {
    setSearchData(data);
    await store.search.fetch.run(searchData);
  }
  return (
    <Container>
      <InputContainer
        placeholder="Find some tracks"
        value={searchData}
        onChangeText={find}
      />

      <SearchingItemsList
        renderItem={({ item }) => <SongComponent item={item} />}
        keyExtractor={(item) => item.id}
        data={arrData}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Footer />}
        ListEmptyComponent={<EmptyComponent>No match finding</EmptyComponent>}
      />
    </Container>
  );
}
export default observer(SearchScreen);
