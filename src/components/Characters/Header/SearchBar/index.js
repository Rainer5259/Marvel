import React, {useState} from 'react';
import {Keyboard, Text, TouchableOpacity} from 'react-native';
import {View, TextInput} from 'react-native';
import styles from './styles';

const SearchBar = ({setSearchName, clearSearch}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [clear, setClear] = useState(false);
  const input = e => {
    setSearchName(e);
  };
  return (
    <View style={styles.content}>
      <TextInput
        style={[styles.searchBar, isFocused && {width: '65%'}]}
        placeholder="Search Characters"
        onChangeText={e => (clear ? '' : input(e))}
        onFocus={() => setIsFocused(prev => !prev)}
        onTextInput={'abc'}
      />
      {isFocused && (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            setIsFocused(false);
            clearSearch();
            setClear(true);
          }}>
          <Text style={{marginLeft: '8%'}}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default SearchBar;
