import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './Header';
import ListOfCharacters from './ListOfCharacters';

const Characters = ({
  data,
  searchName,
  setSearchName,
  loadMoreItems,
  offset,
  clearSearch,
}) => {
  const filteredCharacters =
    searchName != ''
      ? data.filter(character => {
          return character.name.includes(searchName);
        })
      : data;

  const Footer = () => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: 'red',
          top: '5%',
        }}
      />
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ED1D24',
      }}>
      <Header
        setSearchName={setSearchName}
        searchName={searchName}
        clearSearch={clearSearch}
      />
      <ListOfCharacters
        filteredCharacters={filteredCharacters}
        searchName={searchName}
        loadMoreItems={loadMoreItems}
        offset={offset}
      />
      <Footer />
    </SafeAreaView>
  );
};
export default Characters;
