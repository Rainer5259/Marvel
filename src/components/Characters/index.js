import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './Header';
import ListOfCharacters from './ListOfCharacters';

const Characters = ({data, searchName, setSearchName, loadMoreItems}) => {
  const filteredCharacters =
    searchName != ''
      ? data.filter(character => {
          return character.name.includes(searchName);
        })
      : data;
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header setSearchName={setSearchName} />
      <ListOfCharacters
        filteredCharacters={filteredCharacters}
        searchName={searchName}
        loadMoreItems={loadMoreItems}
      />
    </SafeAreaView>
  );
};
export default Characters;
