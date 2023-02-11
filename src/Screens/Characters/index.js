import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import LoadingData from '../../../src/components/LoadingData';
import api from '../../../src/services/api';
import {TS, KEYS, HASH} from '../../../src/services/validation';
import Characters from '../../components/Characters';

function CharactersScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchName, setSearchName] = useState('');
  async function loadCharacters() {
    const characters = `/characters?ts=${TS}&apikey=${
      KEYS.PUBLIC
    }&hash=${HASH}&offset=${offset}&limit=10&${
      searchName ? `&nameStartsWith=${searchName}` : ''
    }`;
    try {
      const response = await api.get(characters);
      const {results} = response.data.data;
      setData(prev => [...prev, ...results]);
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadCharacters();
  }, [offset]);

  const loadMoreItems = () => setOffset(prev => prev + 10);
  console.log(offset);
  return loading ? (
    <LoadingData />
  ) : (
    <Characters
      data={data}
      loadMoreItems={loadMoreItems}
      searchName={searchName}
      setSearchName={setSearchName}
    />
  );
}

export default CharactersScreen;
