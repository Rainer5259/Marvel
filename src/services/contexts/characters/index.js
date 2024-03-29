import React, {useEffect, useState, createContext} from 'react';
import {Alert} from 'react-native';
import api from '../../../services/api';
import {TS, KEYS, HASH} from '../../../services/validation';

export const CharactersContext = createContext({});
function CharactersProvider({children}) {
  const [data, setData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const info = {data, setData};
  const set = {
    //setData,
    setIsHidden,
  };
  async function loadCharacters() {
    const characters = `/characters?ts=${TS}&apikey=${KEYS.PUBLIC}&hash=${HASH}`;
    try {
      const response = await api.get(characters);
      setData(
        response.data.data.results,
        response.data.data.results.map((e, i, a) => (a[i].hide = true)),
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

  return (
    <CharactersContext.Provider value={{info, set, isHidden, loadingStatus}}>
      {children}
    </CharactersContext.Provider>
  );
}

export default CharactersProvider;
