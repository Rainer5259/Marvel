import {SearchBar} from 'react-native-elements';
import React, {useState, useEffect} from 'react';
import styles from './styles';

const SearchCharacters = ({input, props}) => {
  const [search, setSearch] = useState('');

  const updateSearch = text => {
    if (text) {
      const newData = props.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setSearch(text);
      props = newData;
    } else {
      setSearch(text);
    }
  };
  return (
    <SearchBar
      placeholder="Search Character"
      value={input}
      onChangeText={updateSearch}
    />
  );
};

export default SearchCharacters;
