import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ListOfCharacters from '../../../src/components/Characters/ListOfCharacters';
import LoadingData from '../../../src/components/LoadingData';
import api from '../../../services/api';
import {TS, KEYS, HASH} from '../../../services/validation';

function CharactersScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState('');
  async function loadCharacters() {
    // if (searchName === '') {
    //   setLoading(true);
    // }
    const characters = `/characters?ts=${TS}&apikey=${
      KEYS.PUBLIC
    }&hash=${HASH}&limit=100&${
      searchName ? `&nameStartsWith=${searchName}` : ''
    }`;
    try {
      const response = await api.get(characters);
      setData(response.data.data.results);
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      setLoading(true);
    }
  }
  useEffect(() => {
    loadCharacters();
  }, []);

  return loading ? (
    <LoadingData />
  ) : (
    <ListOfCharacters
      searchName={searchName}
      setSearchName={setSearchName}
      data={data}
    />
  );
}

export default CharactersScreen;
