import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ListOfCharacters from '../../../components/ListOfCharacters';
import LoadingData from '../../../components/LoadingData';
import api from '../../../services/api';
import {TS, KEYS, HASH} from '../../../services/validation';

function CharactersScreen() {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [data, setData] = useState([]);
  async function loadCharacters() {
    const characters = `/characters?ts=${TS}&apikey=${KEYS.PUBLIC}&hash=${HASH}`;
    try {
      const response = await api.get(characters);
      setData(
        response.data.data.results,
        response.data.data.results.forEach((e, i, a) => (a[i].hide = true)),
      );
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      setLoadingStatus(false);
    }
  }
  useEffect(() => {
    loadCharacters();
  }, []);

  return loadingStatus ? <LoadingData /> : <ListOfCharacters data={data} />;
}

export default CharactersScreen;
