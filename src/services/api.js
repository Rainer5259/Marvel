import axios from 'axios';
import {Alert} from 'react-native';
import {
  TIMESTAMP,
  MARVEL_API_KEYS,
  MARVEL_HASH,
} from '../../src/services/validation';
const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

async function getCharacters(offset, searchName) {
  const characters = `/characters?ts=${TIMESTAMP}&apikey=${
    MARVEL_API_KEYS.PUBLIC
  }&hash=${MARVEL_HASH}&offset=${offset}&limit=10&${
    searchName ? `&nameStartsWith=${searchName}` : ''
  }`;
  try {
    const response = await api.get(characters);
    const {results} = response.data.data;
    return results;
  } catch (e) {
    Alert.alert('Erro ao requisitar dados');
  }
}

export {getCharacters};
