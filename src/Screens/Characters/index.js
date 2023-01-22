import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ListOfCharacters from '../../../components/Characters/ListOfCharacters';
import LoadingData from '../../../components/LoadingData';
import api from '../../../services/api';
import {TS, KEYS, HASH} from '../../../services/validation';

function CharactersScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  async function loadCharacters() {
    const characters = `/characters?ts=${TS}&apikey=${KEYS.PUBLIC}&hash=${HASH}`;
    try {
      const response = await api.get(characters);
      setData(response.data.data.results);
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadCharacters();
  }, []);

  return loading ? (
    <LoadingData loading={loading} />
  ) : (
    <ListOfCharacters data={data} />
  );
}

export default CharactersScreen;
