import {SearchBar} from 'react-native-elements';
import React, {useState, useEffect} from 'react';
import styles from './styles';

const SearchCharacters = ({data}) => {
  const [search, setSearch] = useState('');

  const updateSearch = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearch(text);
    } else {
      setSearch(text);
    }
  };
  return (
    <SearchBar
      placeholder="Search Character"
      value={search}
      onChangeText={updateSearch}
    />
  );
};

export default SearchCharacters;
