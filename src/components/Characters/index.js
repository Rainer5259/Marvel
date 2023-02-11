import React from 'react';
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
    <>
      <Header setSearchName={setSearchName} />
      <ListOfCharacters
        filteredCharacters={filteredCharacters}
        searchName={searchName}
        loadMoreItems={loadMoreItems}
      />
    </>
  );
};
export default Characters;
