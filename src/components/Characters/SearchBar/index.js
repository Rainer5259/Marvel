import React, {useState} from 'react';
import {Keyboard, Text, TouchableOpacity} from 'react-native';
import {View, TextInput} from 'react-native';
import styles from './styles';

const SearchBar = ({setSearchName}) => {
  const [isFocused, setIsFocused] = useState(false);
  const input = e => {
    setSearchName(e);
  };

  return (
    <View style={styles.content}>
      <TextInput
        style={[styles.searchBar, isFocused && {width: '65%'}]}
        placeholder="Search Characters"
        onChangeText={e => input(e)}
        onFocus={() => setIsFocused(prev => !prev)}
      />
      {isFocused && (
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            setIsFocused(false);
          }}>
          <Text style={{marginLeft: '8%'}}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default SearchBar;
