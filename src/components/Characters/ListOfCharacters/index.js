import React, {useState, useEffect, useMemo, useRef} from 'react';
import {View, Text, SafeAreaView, FlatList, Alert} from 'react-native';
import styles from './styles';
import ItemSeparatorView from '../ItemSeparatorView';
import Themes from '../../../assets/Themes';
import Header from '../Header';
import Description from '../Description';
import Thumbnail from '../Thumbnail';
import api from '../../../services/api';
import {TS, KEYS, HASH} from '../../../services/validation';

const ListOfCharacters = ({setLoading}) => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [offset, setOffset] = useState(0);
  const limit = 10;
  console.log('renderizou CharactersScreen');

  console.log(offset);
  async function loadCharacters() {
    if (offset === 0) {
      setData([]);
    }

    const characters = `/characters?ts=${TS}&apikey=${
      KEYS.PUBLIC
    }&hash=${HASH}&offset=${offset}&${
      searchName ? `&nameStartsWith=${searchName}` : ''
    }`;
    try {
      const response = await api.get(characters);
      const items = response.data.data.results;

      if (data) {
        const current = items;
        setData(prev => [...prev, ...current]);
        setOffset(prev => prev + limit);
      }
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadCharacters();
  }, []);

  const filteredData =
    searchName != ''
      ? data.filter(character => {
          return character.name.includes(searchName);
        })
      : data;

  const pos = searchName.length != 0 ? 0 : 950;

  const Content = ({info}) => {
    return (
      <View style={styles.content}>
        <Text style={Themes.primaryText}>{info.item.name}</Text>
        <Thumbnail info={info} position={pos} />
        {info.item.description && <Description info={info} />}
      </View>
    );
  };

  const title = (
    <Text style={[Themes.title, {textAlign: 'center'}]}>Characters</Text>
  );

  const List = () => {
    return (
      <FlatList
        ListHeaderComponent={title}
        data={filteredData}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={item => <Content info={item} />}
        ItemSeparatorComponent={ItemSeparatorView}
        onEndReachedThreshold={1}
        onEndReached={loadCharacters}
      />
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Header setSearchName={setSearchName} />
        <List />
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
