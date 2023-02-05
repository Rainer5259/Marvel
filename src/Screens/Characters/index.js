import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ListOfCharacters from '../../../src/components/Characters/ListOfCharacters';
import LoadingData from '../../../src/components/LoadingData';
import api from '../../../src/services/api';
import {TS, KEYS, HASH} from '../../../src/services/validation';

function CharactersScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const handleEndReached = () => {
    setOffset(prev => prev + 10);
    loadCharacters(offset);
  };
  console.log(offset);
  async function loadCharacters(offset) {
    // if (searchName === '') {
    //   setLoading(true);
    // }
    const characters = `/characters?ts=${TS}&apikey=${
      KEYS.PUBLIC
    }&hash=${HASH}&offset=${offset}&${
      searchName ? `&nameStartsWith=${searchName}` : ''
    }`;
    try {
      const response = await api.get(characters);
      const items = response.data.data.results.slice(offset, offset + limit);
      setData(prev => [...prev, ...items]);
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadCharacters(offset);
  }, []);

  return loading ? (
    <LoadingData />
  ) : (
    <ListOfCharacters
      searchName={searchName}
      setSearchName={setSearchName}
      data={data}
      setHandleEndReached={handleEndReached}
    />
  );
}

export default CharactersScreen;
