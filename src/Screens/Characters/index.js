import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ListOfCharacters from '../../../components/Characters/ListOfCharacters';
import LoadingData from '../../../components/LoadingData';
import api from '../../../services/api';
import {TS, KEYS, HASH} from '../../../services/validation';

function CharactersScreen() {
  const [loading, setLoading] = useState(true);
  let [count, setCount] = useState(0);
  const [data, setData] = useState([]);
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
      setLoading(true);
    }
  }
  useEffect(() => {
    loadCharacters();
    count++;
  }, []);
  console.log('Renderizou componente');
  let random = count != 0 && Math.floor(Math.random() * 9);
  //Buscar codigo que determina quando o fetch está sendo requisitado
  //while(fetch){random} será que vai funcionar?
  useEffect(() => {
    count <= 200 &&
      setTimeout(() => {
        setCount(count + 1), console.log(count);
      }, 1000);
    random;
  }, [count]);
  return loading ? (
    <LoadingData random={random} />
  ) : (
    <ListOfCharacters data={data} />
  );
}

export default CharactersScreen;
