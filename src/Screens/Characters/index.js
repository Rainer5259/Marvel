import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ListOfCharacters from '../../../components/Characters/ListOfCharacters';
import LoadingData from '../../../components/LoadingData';
import api from '../../../services/api';
import {TS, KEYS, HASH} from '../../../services/validation';

function CharactersScreen() {
  const [data, setData] = useState([]);
  let loading = data.length != 0 ? false : true;
  async function loadCharacters() {
    const characters = `/characters?ts=${TS}&apikey=${KEYS.PUBLIC}&hash=${HASH}`;
    try {
      const response = await api.get(characters);
      setData(
        response.data.data.results,
        // response.data.data.results.forEach((e, i, a) => (a[i].hide = true)),
      );
    } catch (e) {
      Alert.alert('Erro ao requisitar dados');
    } finally {
      loading;
    }
  }
  useEffect(() => {
    loadCharacters();
  }, []);
  console.log('Renderizou componente');

  //Buscar codigo que determina quando o fetch está sendo requisitado
  //while(fetch){random} será que vai funcionar?

  return loading ? <LoadingData /> : <ListOfCharacters data={data} />;
}

export default CharactersScreen;
