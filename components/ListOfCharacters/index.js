import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  VirtualizedList,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import ItemSeparatorView from '../ItemSeparatorView';
import SearchCharacters from '../SearchCharacters';
import {SearchBar} from 'react-native-elements';

const ListOfCharacters = ({data}) => {
  const [filteredData, setFilteredData] = useState(data);

  const [search, setSearch] = useState('');
  useEffect(() => {
    console.log(search);
  }, [filteredData]);

  const updateSearch = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearch(text);
      setFilteredData(newData);
    } else {
      setFilteredData(data);
      setSearch(text);
    }
  };

  const Items = ({info}) => {
    const img = {
      path: info.item.thumbnail.path,
      extension: info.item.thumbnail.extension,
    };
    const thumbnail = `${img.path.replace(/http/i, 'https')}.${img.extension}`;

    return (
      <View style={styles.content}>
        <Text>{info.item.name}</Text>
        <Image
          source={{
            uri: thumbnail,
          }}
          style={styles.img}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <SearchBar
          placeholder="Search Character"
          value={search}
          onChangeText={updateSearch}
        />
        <View style={styles.header}>
          <Icon.Button name="arrow-left" />
        </View>
        <Text style={styles.title}>Characters</Text>

        <View style={styles.horizontalBar} />
        <FlatList
          data={filteredData}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={item => <Items info={item} />}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
